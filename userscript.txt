// ==UserScript==
// @name         google map scraper
// @namespace    http://google.com/
// @version      2025-05-22
// @description  google map result
// @author       Web Automation Lover
// @match        https://www.google.com/maps/search/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xiaohongshu.com
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    window.jsonArr = [];

    const button = document.createElement('button');
    button.innerText = 'Click to Export (0)';
    button.style.marginLeft = '10px';

    button.style.backgroundColor = '#f0f0f0';
    button.style.border = '1px solid #ccc';
    button.style.borderRadius = '5px';
    button.style.padding = '5px 10px';
    button.style.fontSize = '14px';
    button.style.cursor = 'pointer';
    button.style.transition = 'background-color 0.3s';

    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#e0e0e0';
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#f0f0f0';
    });

    button.addEventListener('click', function() {
        const ws = XLSX.utils.json_to_sheet(window.jsonArr);

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });
        const s2ab = function(s) {
            const buf = new ArrayBuffer(s.length);
            const view = new Uint8Array(buf);
            for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        };
        const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'data.xlsx';
        a.click();

    });

    function updateButtonText() {
        button.innerText = 'Click to Export (' + window.jsonArr.length + ')';
    }

    const injectButton = () => {
        const targetDiv = document.querySelectorAll('#assistive-chips > div > div > div > div > div > div > div > div > div')[1];
        if (targetDiv && !document.querySelector('#my-custom-button')) {
            button.id = 'my-custom-button';
            targetDiv.appendChild(button);
        }
    };

    setInterval(injectButton, 1000);

    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function(method, url) {
        this._url = url;
        return originalOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function() {
        this.addEventListener('load', function() {
            if (this._url.includes('/search?tbm=map')) {

                var rspJson = JSON.parse(this.responseText.replace(`/*""*/`,""));
                var e = rspJson.d;
                var cleanedData = e.replace(`)]}'`, "");

                let parsedData = JSON.parse(cleanedData);

                let dataList = parsedData[0][1];

                let filteredData = dataList.filter(item => {
                    return item?.[14] !== undefined;
                });

                if (!filteredData || filteredData.length < 1) {
                    filteredData = parsedData[64];
                }

                if (filteredData) {
                    var formatedData = formatAllData(filteredData)
                    window.jsonArr.push(...formatedData)
                    console.log('song jsonArr:' + window.jsonArr.length)
                    updateButtonText()
                }
            }
        });

        return originalSend.apply(this, arguments);
    };


function formatAllData(allDataList) {
    return allDataList.map(d => formatDataItem(d)).filter(d => d.name)
}

function formatDataItem(item) {
    const fieldConfig = {
        fullAddress: [39],
        placeId: [78],
        kgmid: [89],
        categories: [13],
        feature: [32, 0, 1],
        cid: [10],
        featuredImage: [37, 0, 0, 6, 0],
        phones: [],
        icon: [122, 0, 1],
        name: [11],
        latitude: [9, 2],
        longitude: [9, 3],
        reviewCount: [4, 8],
        reviewURL: [4, 3, 0],
        averageRating: [4, 7],
        street: [183, 0, 0, 1, 1],
        municipality: [183, 1, 3],
        openingHours: [],
        website: [7, 0],
        domain: [7, 1]
    }

    const resultData = {}
    Object.keys(fieldConfig).forEach(key => {
        resultData[key] = handleSingleField(fieldConfig[key])
    })
    resultData.phones = handleSingleField([178, 0, 1])?.map(d => d?.[0])
    resultData.openingHours = handleSingleField([34, 1])?.map(d => [`${d[0]}:[${d[1]}]`])?.join(', ')
    resultData.googleMapsURL = "https://www.google.com/maps?cid=".concat(resultData.cid)
    resultData.googleKnowledgeURL = "https://www.google.com/search?kgmid=".concat(resultData.kgmid, "&kponly")

    resultData.phones = resultData.phones?.join?.(', ')
    resultData.categories = resultData.categories?.join?.(', ')
    resultData.street = resultData.street?.join?.(', ')

    function handleSingleField(config) {
        const itemData = item[1]
        if (!itemData) {
            return
        }
        if (!config || !config.length) {
            return
        }
        let currentData = itemData
        for (let i = 0; i < config.length; i++) {
            currentData = currentData?.[config[i]]
        }
        return currentData
    }

    return resultData
}

})();
