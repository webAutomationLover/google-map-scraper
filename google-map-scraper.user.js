// ==UserScript==
// @name         google map scraper
// @namespace    http://google.com/
// @version      1.0.3
// @description  google map result
// @author       Web Automation Lover
// @match        *://*.google.com/maps/search/*/*
// @match        *://*.google.ad/maps/search/**
// @match        *://*.google.ae/maps/search/**
// @match        *://*.google.ac/maps/search/**
// @match        *://*.google.com.ag/maps/search/**
// @match        *://*.google.com.ai/maps/search/**
// @match        *://*.google.com.af/maps/search/**
// @match        *://*.google.al/maps/search/**
// @match        *://*.google.am/maps/search/**
// @match        *://*.google.co.ao/maps/search/**
// @match        *://*.google.at/maps/search/**
// @match        *://*.google.com.ar/maps/search/**
// @match        *://*.google.as/maps/search/**
// @match        *://*.google.com.au/maps/search/**
// @match        *://*.google.com.bd/maps/search/**
// @match        *://*.google.az/maps/search/**
// @match        *://*.google.ba/maps/search/**
// @match        *://*.google.bg/maps/search/**
// @match        *://*.google.be/maps/search/**
// @match        *://*.google.bf/maps/search/**
// @match        *://*.google.com.bh/maps/search/**
// @match        *://*.google.com.bn/maps/search/**
// @match        *://*.google.bi/maps/search/**
// @match        *://*.google.bj/maps/search/**
// @match        *://*.google.bs/maps/search/**
// @match        *://*.google.com.bo/maps/search/**
// @match        *://*.google.com.br/maps/search/**
// @match        *://*.google.bt/maps/search/**
// @match        *://*.google.co.bw/maps/search/**
// @match        *://*.google.by/maps/search/**
// @match        *://*.google.com.bz/maps/search/**
// @match        *://*.google.ca/maps/search/**
// @match        *://*.google.com.kh/maps/search/**
// @match        *://*.google.cc/maps/search/**
// @match        *://*.google.cd/maps/search/**
// @match        *://*.google.cf/maps/search/**
// @match        *://*.google.cat/maps/search/**
// @match        *://*.google.cg/maps/search/**
// @match        *://*.google.ch/maps/search/**
// @match        *://*.google.ci/maps/search/**
// @match        *://*.google.co.ck/maps/search/**
// @match        *://*.google.cl/maps/search/**
// @match        *://*.google.cm/maps/search/**
// @match        *://*.google.cn/maps/search/**
// @match        *://*.google.com.co/maps/search/**
// @match        *://*.google.co.cr/maps/search/**
// @match        *://*.google.com.cu/maps/search/**
// @match        *://*.google.cv/maps/search/**
// @match        *://*.google.com.cy/maps/search/**
// @match        *://*.google.cz/maps/search/**
// @match        *://*.google.de/maps/search/**
// @match        *://*.google.dj/maps/search/**
// @match        *://*.google.dk/maps/search/**
// @match        *://*.google.dm/maps/search/**
// @match        *://*.google.com.do/maps/search/**
// @match        *://*.google.dz/maps/search/**
// @match        *://*.google.com.ec/maps/search/**
// @match        *://*.google.ee/maps/search/**
// @match        *://*.google.com.eg/maps/search/**
// @match        *://*.google.es/maps/search/**
// @match        *://*.google.com.et/maps/search/**
// @match        *://*.google.fi/maps/search/**
// @match        *://*.google.com.fj/maps/search/**
// @match        *://*.google.fm/maps/search/**
// @match        *://*.google.fr/maps/search/**
// @match        *://*.google.ga/maps/search/**
// @match        *://*.google.ge/maps/search/**
// @match        *://*.google.gf/maps/search/**
// @match        *://*.google.gg/maps/search/**
// @match        *://*.google.com.gh/maps/search/**
// @match        *://*.google.com.gi/maps/search/**
// @match        *://*.google.gl/maps/search/**
// @match        *://*.google.gm/maps/search/**
// @match        *://*.google.gp/maps/search/**
// @match        *://*.google.gr/maps/search/**
// @match        *://*.google.com.gt/maps/search/**
// @match        *://*.google.gy/maps/search/**
// @match        *://*.google.com.hk/maps/search/**
// @match        *://*.google.hn/maps/search/**
// @match        *://*.google.hr/maps/search/**
// @match        *://*.google.ht/maps/search/**
// @match        *://*.google.hu/maps/search/**
// @match        *://*.google.co.id/maps/search/**
// @match        *://*.google.iq/maps/search/**
// @match        *://*.google.ie/maps/search/**
// @match        *://*.google.co.il/maps/search/**
// @match        *://*.google.im/maps/search/**
// @match        *://*.google.co.in/maps/search/**
// @match        *://*.google.io/maps/search/**
// @match        *://*.google.is/maps/search/**
// @match        *://*.google.it/maps/search/**
// @match        *://*.google.je/maps/search/**
// @match        *://*.google.com.jm/maps/search/**
// @match        *://*.google.jo/maps/search/**
// @match        *://*.google.co.jp/maps/search/**
// @match        *://*.google.co.ke/maps/search/**
// @match        *://*.google.ki/maps/search/**
// @match        *://*.google.kg/maps/search/**
// @match        *://*.google.co.kr/maps/search/**
// @match        *://*.google.com.kw/maps/search/**
// @match        *://*.google.kz/maps/search/**
// @match        *://*.google.la/maps/search/**
// @match        *://*.google.com.lb/maps/search/**
// @match        *://*.google.com.lc/maps/search/**
// @match        *://*.google.li/maps/search/**
// @match        *://*.google.lk/maps/search/**
// @match        *://*.google.co.ls/maps/search/**
// @match        *://*.google.lt/maps/search/**
// @match        *://*.google.lu/maps/search/**
// @match        *://*.google.lv/maps/search/**
// @match        *://*.google.com.ly/maps/search/**
// @match        *://*.google.co.ma/maps/search/**
// @match        *://*.google.md/maps/search/**
// @match        *://*.google.me/maps/search/**
// @match        *://*.google.mg/maps/search/**
// @match        *://*.google.mk/maps/search/**
// @match        *://*.google.ml/maps/search/**
// @match        *://*.google.com.mm/maps/search/**
// @match        *://*.google.mn/maps/search/**
// @match        *://*.google.ms/maps/search/**
// @match        *://*.google.com.mt/maps/search/**
// @match        *://*.google.mu/maps/search/**
// @match        *://*.google.mv/maps/search/**
// @match        *://*.google.mw/maps/search/**
// @match        *://*.google.com.mx/maps/search/**
// @match        *://*.google.com.my/maps/search/**
// @match        *://*.google.co.mz/maps/search/**
// @match        *://*.google.com.na/maps/search/**
// @match        *://*.google.ne/maps/search/**
// @match        *://*.google.com.nf/maps/search/**
// @match        *://*.google.com.ng/maps/search/**
// @match        *://*.google.com.ni/maps/search/**
// @match        *://*.google.nl/maps/search/**
// @match        *://*.google.no/maps/search/**
// @match        *://*.google.com.np/maps/search/**
// @match        *://*.google.nr/maps/search/**
// @match        *://*.google.nu/maps/search/**
// @match        *://*.google.co.nz/maps/search/**
// @match        *://*.google.com.om/maps/search/**
// @match        *://*.google.com.pk/maps/search/**
// @match        *://*.google.com.pa/maps/search/**
// @match        *://*.google.com.pe/maps/search/**
// @match        *://*.google.com.ph/maps/search/**
// @match        *://*.google.pl/maps/search/**
// @match        *://*.google.com.pg/maps/search/**
// @match        *://*.google.pn/maps/search/**
// @match        *://*.google.com.pr/maps/search/**
// @match        *://*.google.ps/maps/search/**
// @match        *://*.google.pt/maps/search/**
// @match        *://*.google.com.py/maps/search/**
// @match        *://*.google.com.qa/maps/search/**
// @match        *://*.google.ro/maps/search/**
// @match        *://*.google.rs/maps/search/**
// @match        *://*.google.ru/maps/search/**
// @match        *://*.google.rw/maps/search/**
// @match        *://*.google.com.sa/maps/search/**
// @match        *://*.google.com.sb/maps/search/**
// @match        *://*.google.sc/maps/search/**
// @match        *://*.google.co.th/maps/search/**
// @match        *://*.google.com.tj/maps/search/**
// @match        *://*.google.tk/maps/search/**
// @match        *://*.google.tl/maps/search/**
// @match        *://*.google.tm/maps/search/**
// @match        *://*.google.to/maps/search/**
// @match        *://*.google.tn/maps/search/**
// @match        *://*.google.com.tr/maps/search/**
// @match        *://*.google.tt/maps/search/**
// @match        *://*.google.com.tw/maps/search/**
// @match        *://*.google.co.tz/maps/search/**
// @match        *://*.google.se/maps/search/**
// @match        *://*.google.com.sg/maps/search/**
// @match        *://*.google.sh/maps/search/**
// @match        *://*.google.si/maps/search/**
// @match        *://*.google.sk/maps/search/**
// @match        *://*.google.com.sl/maps/search/**
// @match        *://*.google.sn/maps/search/**
// @match        *://*.google.sm/maps/search/**
// @match        *://*.google.so/maps/search/**
// @match        *://*.google.st/maps/search/**
// @match        *://*.google.sr/maps/search/**
// @match        *://*.google.com.sv/maps/search/**
// @match        *://*.google.td/maps/search/**
// @match        *://*.google.tg/maps/search/**
// @match        *://*.google.com.ua/maps/search/**
// @match        *://*.google.co.ug/maps/search/**
// @match        *://*.google.co.uk/maps/search/**
// @match        *://*.google.com/maps/search/**
// @match        *://*.google.com.uy/maps/search/**
// @match        *://*.google.co.uz/maps/search/**
// @match        *://*.google.com.vc/maps/search/**
// @match        *://*.google.co.ve/maps/search/**
// @match        *://*.google.vg/maps/search/**
// @match        *://*.google.co.vi/maps/search/**
// @match        *://*.google.com.vn/maps/search/**
// @match        *://*.google.vu/maps/search/**
// @match        *://*.google.ws/maps/search/**
// @match        *://*.google.co.za/maps/search/**
// @match        *://*.google.co.zm/maps/search/**
// @match        *://*.google.co.zw/maps/search/**
// @updateURL    https://github.com/webAutomationLover/google-map-scraper/raw/refs/heads/main/google-map-scraper.user.js
// @downloadURL  https://github.com/webAutomationLover/google-map-scraper/raw/refs/heads/main/google-map-scraper.user.js
// @supportURL   https://github.com/webAutomationLover/google-map-scraper/issues
// @homepageURL  https://github.com/webAutomationLover/google-map-scraper
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xiaohongshu.com
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     bootstrapCSS https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @require      https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    class DataManager {
        constructor() {
            this.data = new Map();
            this.errorLog = [];
            this.defaultFields = new Set([
                'name', 'fullAddress', 'phones', 'website',
                'averageRating', 'reviewCount', 'categories'
            ]);
            this.selectedFields = new Set(this.defaultFields);
            this.loadSelectedFields();
            this.validationRules = {
                name: { required: true, minLength: 1 },
                fullAddress: { required: true, minLength: 5 },
                phones: { pattern: /^[0-9+\s-]+$/ },
                website: { pattern: /^https?:\/\/.+/ },
                averageRating: { min: 0, max: 5 },
                reviewCount: { min: 0 }
            };
        }

        loadSelectedFields() {
            const savedFields = localStorage.getItem('googleMapsScraperSelectedFields');
            if (savedFields) {
                this.selectedFields = new Set(JSON.parse(savedFields));
            }
        }

        saveSelectedFields() {
            localStorage.setItem('googleMapsScraperSelectedFields',
                JSON.stringify(Array.from(this.selectedFields)));
        }

        addItem(item) {
            if (!item || !item.placeId) {
                console.log('Skipping item: Missing placeId');
                return;
            }

            const isDuplicate = this.data.has(item.placeId);
            if (isDuplicate) {
                console.log(`Duplicate record found - placeId: ${item.placeId}, name: ${item.name}`);
            } else {
                console.log(`New record added - placeId: ${item.placeId}, name: ${item.name}`);
            }

            this.data.set(item.placeId, item);
        }

        getItems() {
            return Array.from(this.data.values());
        }

        getCount() {
            return this.data.size;
        }

        logError(error) {
            this.errorLog.push({
                timestamp: new Date().toISOString(),
                error: error.message || error
            });
            console.error('Error:', error);
        }

        getErrors() {
            return this.errorLog;
        }

        getSelectedFields() {
            return Array.from(this.selectedFields);
        }

        setSelectedFields(fields) {
            this.selectedFields = new Set(fields);
            this.saveSelectedFields();
        }

        getPreviewData(limit = 5) {
            return this.getItems().slice(0, limit);
        }

        validateItem(item) {
            const errors = [];
            Object.entries(this.validationRules).forEach(([field, rules]) => {
                const value = item[field];

                if (rules.required && (!value || value.length === 0)) {
                    errors.push(`${field} is required`);
                }

                if (value) {
                    if (rules.minLength && value.length < rules.minLength) {
                        errors.push(`${field} length cannot be less than ${rules.minLength}`);
                    }
                    if (rules.pattern && !rules.pattern.test(value)) {
                        errors.push(`${field} format is incorrect`);
                    }
                    if (rules.min !== undefined && value < rules.min) {
                        errors.push(`${field} cannot be less than ${rules.min}`);
                    }
                    if (rules.max !== undefined && value > rules.max) {
                        errors.push(`${field} cannot be greater than ${rules.max}`);
                    }
                }
            });
            return errors;
        }

        cleanData() {
            const cleanedData = new Map();
            this.data.forEach((item, key) => {
                const cleanedItem = { ...item };
                // Clean phone number format
                if (cleanedItem.phones) {
                    cleanedItem.phones = cleanedItem.phones.replace(/[^\d+]/g, '');
                }
                // Clean website format
                if (cleanedItem.website && !cleanedItem.website.startsWith('http')) {
                    cleanedItem.website = 'https://' + cleanedItem.website;
                }
                // Clean rating
                if (cleanedItem.averageRating) {
                    cleanedItem.averageRating = Math.min(5, Math.max(0, parseFloat(cleanedItem.averageRating)));
                }
                cleanedData.set(key, cleanedItem);
            });
            this.data = cleanedData;
        }

        prepareData() {
            this.cleanData();
            const data = this.getItems().map(item => {
                const filteredItem = {};
                this.getSelectedFields().forEach(field => {
                    filteredItem[field] = item[field];
                });
                return filteredItem;
            });

            const validationErrors = [];
            data.forEach((item, index) => {
                const errors = this.validateItem(item);
                if (errors.length > 0) {
                    validationErrors.push({
                        index,
                        item: item.name || `Item ${index}`,
                        errors
                    });
                }
            });

            if (validationErrors.length > 0) {
                console.warn('Data validation warnings:', validationErrors);
                this.logError({
                    type: 'validation',
                    errors: validationErrors
                });
            }

            return data;
        }

        resetToDefaultFields() {
            this.selectedFields = new Set(this.defaultFields);
            this.saveSelectedFields();
        }
    }

    class ConfigManager {
        constructor() {
            this.config = {
                scrollSpeed: 1000,
                scrollInterval: {
                    min: 5,
                    max: 10
                }
            };
            this.loadConfig();
            this.onConfigChange = null;
        }

        loadConfig() {
            const savedConfig = localStorage.getItem('googleMapsScraperConfig');
            if (savedConfig) {
                this.config = { ...this.config, ...JSON.parse(savedConfig) };
            }
        }

        saveConfig() {
            localStorage.setItem('googleMapsScraperConfig', JSON.stringify(this.config));
        }

        updateConfig(newConfig) {
            this.config = { ...this.config, ...newConfig };
            this.saveConfig();
            if (this.onConfigChange) {
                this.onConfigChange(this.config);
            }
        }
    }

    class AutoScrollManager {
        constructor() {
            this.scrollTimer = null;
            this.countdownTimer = null;
            this.isLoading = false;
            this.createCountdownDisplay();
        }

        createCountdownDisplay() {
            this.countdownDisplay = $('<div class="countdown-display" style="display: none; position: fixed; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 4px; font-size: 12px; z-index: 9999;"></div>');
            $('body').append(this.countdownDisplay);
        }

        startCountdown(seconds) {
            if (this.countdownTimer) {
                clearInterval(this.countdownTimer);
            }

            this.countdownDisplay.show();
            let remainingSeconds = seconds;

            const updateDisplay = () => {
                this.countdownDisplay.text(`Next scroll in ${remainingSeconds}s`);
                if (remainingSeconds <= 0) {
                    clearInterval(this.countdownTimer);
                    this.countdownTimer = null;
                }
                remainingSeconds--;
            };

            updateDisplay();
            this.countdownTimer = setInterval(updateDisplay, 1000);
        }

        getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        checkIfReachedEnd() {
            const elScroll = document.querySelector('[role="feed"]');
            if (!elScroll) return false;

            const lastChild = elScroll.lastElementChild;
            return lastChild && lastChild.getAttribute('style')?.includes('height: 64px');
        }

        scroll() {
            const elScroll = document.querySelector('[role="feed"]');
            if (!elScroll) {
                console.warn("Scrollable element not found. Stopping auto-scroll.");
                this.stop();
                return;
            }

            // Read the latest config before each scroll
            const config = configManager.config;
            elScroll.scrollBy({
                top: config.scrollSpeed,
                behavior: 'smooth'
            });

            if (this.checkIfReachedEnd()) {
                console.log("Reached end of results.");
                this.stop();
                return;
            }

            // Use the latest config to calculate the next scroll interval
            const nextInterval = this.getRandomInteger(
                config.scrollInterval.min,
                config.scrollInterval.max
            );
            this.startCountdown(nextInterval);
            this.scrollTimer = setTimeout(() => this.scroll(), nextInterval * 1000);
        }

        start() {
            if (this.isLoading) return;

            // Check if already at the end
            if (this.checkIfReachedEnd()) {
                alert('Already reached the end of results. Please try a new search or move the map to load more results.');
                return;
            }

            this.isLoading = true;
            console.log('Starting auto scroll with config:', configManager.config);

            // Update button states
            startAutoScrollButton.html('Stop Auto Scroll');
            startAutoScrollButton.removeClass('btn-secondary').addClass('btn-danger');
            bsButton.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Export Data (' + dataManager.getCount() + ')');

            // Use the latest config to start the first scroll
            const config = configManager.config;
            const firstInterval = this.getRandomInteger(
                config.scrollInterval.min,
                config.scrollInterval.max
            );
            this.startCountdown(firstInterval);
            this.scrollTimer = setTimeout(() => this.scroll(), firstInterval * 1000);
        }

        stop() {
            if (this.scrollTimer) {
                clearTimeout(this.scrollTimer);
                this.scrollTimer = null;
            }
            if (this.countdownTimer) {
                clearInterval(this.countdownTimer);
                this.countdownTimer = null;
            }
            this.isLoading = false;
            this.countdownDisplay.hide();

            // Reset button states
            startAutoScrollButton.html('Start Auto Scroll');
            startAutoScrollButton.removeClass('btn-danger').addClass('btn-secondary');
            bsButton.prop('disabled', false).html('Export Data (' + dataManager.getCount() + ')');
        }
    }

    class ExportManager {
        constructor(dataManager) {
            this.dataManager = dataManager;
        }

        getFileName(extension) {
            const now = new Date();
            const timestamp = now.getFullYear() + '-' +
                String(now.getMonth() + 1).padStart(2, '0') + '-' +
                String(now.getDate()).padStart(2, '0') + '-' +
                String(now.getHours()).padStart(2, '0') + ':' +
                String(now.getMinutes()).padStart(2, '0') + ':' +
                String(now.getSeconds()).padStart(2, '0');
            return `google_maps_data_${timestamp}.${extension}`;
        }

        exportToXLSX() {
            try {
                const data = this.dataManager.prepareData();
                const ws = XLSX.utils.json_to_sheet(data);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

                if (this.dataManager.getErrors().length > 0) {
                    const errorWs = XLSX.utils.json_to_sheet(this.dataManager.getErrors());
                    XLSX.utils.book_append_sheet(wb, errorWs, 'Errors');
                }

                // Convert to binary string
                const wbout = XLSX.write(wb, {
                    bookType: 'xlsx',
                    type: 'binary',
                    bookSST: true
                });

                // Convert binary string to array buffer
                const buf = new ArrayBuffer(wbout.length);
                const view = new Uint8Array(buf);
                for (let i = 0; i < wbout.length; i++) {
                    view[i] = wbout.charCodeAt(i) & 0xFF;
                }

                // Create blob and download
                const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                this.downloadFile(blob, this.getFileName('xlsx'), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            } catch (error) {
                this.dataManager.logError(error);
                alert('Error exporting to XLSX. Please check console for details.');
            }
        }

        exportToCSV() {
            try {
                const data = this.dataManager.prepareData();
                const ws = XLSX.utils.json_to_sheet(data);
                const csv = XLSX.utils.sheet_to_csv(ws);
                this.downloadFile(csv, this.getFileName('csv'), 'text/csv');
            } catch (error) {
                this.dataManager.logError(error);
                alert('Error exporting to CSV. Please check console for details.');
            }
        }

        exportToJSON() {
            try {
                const data = this.dataManager.prepareData();
                const json = JSON.stringify(data, null, 2);
                this.downloadFile(json, this.getFileName('json'), 'application/json');
            } catch (error) {
                this.dataManager.logError(error);
                alert('Error exporting to JSON. Please check console for details.');
            }
        }

        downloadFile(content, filename, mimeType) {
            const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = filename;
            a.click();
            URL.revokeObjectURL(a.href);
        }
    }

    const dataManager = new DataManager();
    const configManager = new ConfigManager();
    const autoScrollManager = new AutoScrollManager();
    const exportManager = new ExportManager(dataManager);

    window.jsonArr = [];

    GM_addStyle(GM_getResourceText("bootstrapCSS"));

    const modalHTML = `
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="myModalLabel">Bootstrap Modal</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        This is the content of the Bootstrap modal.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    $('body').append(modalHTML);

    const bsButton = $('<button type="button" class="btn btn-primary">Export Data (0)</button>');
    const startAutoScrollButton = $('<button type="button" class="btn btn-secondary ml-2" id="start-scroll-button">Start Auto Scroll</button>');
    const configButton = $('<button type="button" class="btn btn-outline-secondary ml-2" id="config-button"><i class="fas fa-cog"></i></button>');

    bsButton.click(function() {
        updateFieldSelector();
        updatePreviewTable();
        $('#previewModal').modal('show');
    });

    function updateButtonText() {
        bsButton.text('Export Data (' + dataManager.getCount() + ')');
    }

    startAutoScrollButton.click(() => {
        console.log('Start auto scroll button clicked');
        if (autoScrollManager.isLoading) {
            autoScrollManager.stop();
        } else {
            autoScrollManager.start();
        }
    });

    // Create configuration panel
    const configModalHTML = `
        <div class="modal fade" id="configModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Settings</h5>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="configForm">
                            <div class="form-group">
                                <label>Scroll Speed (pixels/second)</label>
                                <input type="number" class="form-control" id="scrollSpeed" 
                                       value="${configManager.config.scrollSpeed}">
                            </div>
                            <div class="form-group">
                                <label>Scroll Interval (seconds)</label>
                                <small class="form-text text-muted mb-2">
                                    Set a range for random interval between scrolls. The script will randomly choose a value between min and max.
                                </small>
                                <div class="row">
                                    <div class="col">
                                        <input type="number" class="form-control" id="scrollIntervalMin" 
                                               placeholder="Min" value="${configManager.config.scrollInterval.min}">
                                    </div>
                                    <div class="col">
                                        <input type="number" class="form-control" id="scrollIntervalMax" 
                                               placeholder="Max" value="${configManager.config.scrollInterval.max}">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="saveConfig">Save Settings</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('body').append(configModalHTML);

    // Add configuration button
    configButton.click(() => {
        console.log('Config button clicked');
        try {
            if ($('#configModal').length === 0) {
                console.error('Config modal not found in DOM');
                return;
            }
            $('#configModal').modal('show');
        } catch (error) {
            console.error('Error showing config modal:', error);
            alert('Unable to open settings panel. Please refresh the page and try again.');
        }
    });

    // Save configuration
    $('#saveConfig').click(() => {
        const newConfig = {
            scrollSpeed: parseInt($('#scrollSpeed').val()),
            scrollInterval: {
                min: parseInt($('#scrollIntervalMin').val()),
                max: parseInt($('#scrollIntervalMax').val())
            }
        };

        configManager.updateConfig(newConfig);

        $('#configModal').modal('hide');
    });

    // Modify button injection function
    const injectButton = () => {
        const targetDiv = document.querySelectorAll('#assistive-chips > div > div > div > div > div > div > div > div > div')[1];
        if (targetDiv && !document.querySelector('#my-custom-button')) {
            console.log('Injecting buttons');
            const bsButtonDOM = bsButton[0];
            bsButtonDOM.id = 'my-custom-button';
            bsButtonDOM.style.marginLeft = '20px';

            const parentDiv = targetDiv;
            parentDiv.appendChild(bsButtonDOM);
            parentDiv.appendChild(startAutoScrollButton[0]);
            parentDiv.appendChild(configButton[0]);
        }
    };

    // Add debug logs
    const observer = new MutationObserver(mutations => {
        console.log('DOM mutation detected');
        injectButton();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });

    // Modify XHR to capture data
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function(method, url) {
        this._url = url;
        return originalOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function() {
        this.addEventListener('load', function() {
            if (this._url.includes('/search?tbm=map')) {
                try {
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
                        var formatedData = formatAllData(filteredData);
                        formatedData.forEach(item => dataManager.addItem(item));
                        console.log('Total items:', dataManager.getCount());
                        // Update export button with loading icon if auto-scroll is active
                        if (autoScrollManager.isLoading) {
                            bsButton.html('<i class="fas fa-spinner fa-spin"></i> Export Data (' + dataManager.getCount() + ')');
                        } else {
                            updateButtonText();
                        }
                    }
                } catch (error) {
                    dataManager.logError(error);
                }
            }
        });

        return originalSend.apply(this, arguments);
    };

    // Format data for export
    function formatAllData(allDataList) {
        return allDataList.map(d => formatDataItem(d)).filter(d => d.name);
    }

    // Format individual data item
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
        };

        const resultData = {};
        Object.keys(fieldConfig).forEach(key => {
            resultData[key] = handleSingleField(fieldConfig[key]);
        });

        // Process special fields
        resultData.phones = handleSingleField([178, 0, 1])?.map(d => d?.[0]);
        resultData.openingHours = handleSingleField([34, 1])?.map(d => [`${d[0]}:[${d[1]}]`])?.join(', ');
        resultData.googleMapsURL = "https://www.google.com/maps?cid=".concat(resultData.cid);
        resultData.googleKnowledgeURL = "https://www.google.com/maps/search/*?kgmid=".concat(resultData.kgmid, "&kponly");

        // Format array fields
        resultData.phones = resultData.phones?.join?.(', ');
        resultData.categories = resultData.categories?.join?.(', ');
        resultData.street = resultData.street?.join?.(', ');

        function handleSingleField(config) {
            const itemData = item[1];
            if (!itemData) {
                return;
            }
            if (!config || !config.length) {
                return;
            }
            let currentData = itemData;
            for (let i = 0; i < config.length; i++) {
                currentData = currentData?.[config[i]];
            }
            return currentData;
        }

        return resultData;
    }

    // Create preview modal
    const previewModalHTML = `
        <div class="modal fade" id="previewModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Data Preview</h5>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <label class="mb-0">Select Export Fields:</label>
                                <div>
                                    <button type="button" class="btn btn-sm btn-outline-secondary mr-2" id="selectAllFields">Select All</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary" id="resetFields">Reset</button>
                                </div>
                            </div>
                            <div id="fieldSelector" class="d-flex flex-wrap">
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead id="previewTableHead"></thead>
                                <tbody id="previewTableBody"></tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" id="clearData">Clear Data</button>
                        <button type="button" class="btn btn-success" id="exportXLSX">Export XLSX</button>
                        <button type="button" class="btn btn-info" id="exportCSV">Export CSV</button>
                        <button type="button" class="btn btn-warning" id="exportJSON">Export JSON</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Create confirmation modal for clearing data
    const confirmModalHTML = `
        <div class="modal fade" id="confirmClearModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Confirm Clear Data</h5>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to clear all collected data? This action cannot be undone.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" id="confirmClear">Clear All Data</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('body').append(previewModalHTML);
    $('body').append(confirmModalHTML);

    function updatePreviewTable() {
        const previewData = dataManager.getPreviewData();
        const fields = dataManager.getSelectedFields();

        // Update table header
        const thead = $('#previewTableHead');
        thead.empty();
        const headerRow = $('<tr>');
        fields.forEach(field => {
            headerRow.append(`<th>${field}</th>`);
        });
        thead.append(headerRow);

        // Update table content
        const tbody = $('#previewTableBody');
        tbody.empty();
        previewData.forEach(item => {
            const row = $('<tr>');
            fields.forEach(field => {
                row.append(`<td>${item[field] || ''}</td>`);
            });
            tbody.append(row);
        });
    }

    function updateFieldSelector() {
        const fieldSelector = $('#fieldSelector');
        fieldSelector.empty();

        const allFields = [
            'name', 'fullAddress', 'phones', 'website', 'averageRating',
            'reviewCount', 'categories', 'featuredImage', 'latitude',
            'longitude', 'street', 'municipality', 'openingHours',
            'placeId', 'kgmid', 'feature', 'cid', 'icon', 'reviewURL',
            'domain', 'googleMapsURL', 'googleKnowledgeURL'
        ];

        allFields.forEach(field => {
            const div = $(`
                <div class="custom-control custom-checkbox mr-3 mb-2">
                    <input type="checkbox" class="custom-control-input" id="field_${field}" 
                           ${dataManager.selectedFields.has(field) ? 'checked' : ''}>
                    <label class="custom-control-label" for="field_${field}">${field}</label>
                </div>
            `);
            fieldSelector.append(div);
        });

        // Add field selection event listener
        $('.custom-control-input').change(function() {
            const field = $(this).attr('id').replace('field_', '');
            if (this.checked) {
                dataManager.selectedFields.add(field);
                dataManager.saveSelectedFields();
                updatePreviewTable();
            } else {
                // Check if this is the last selected field
                if (dataManager.selectedFields.size <= 1) {
                    // Prevent unchecking the last field
                    $(this).prop('checked', true);
                    alert('At least one export field must be selected');
                    return;
                }
                dataManager.selectedFields.delete(field);
                dataManager.saveSelectedFields();
                updatePreviewTable();
            }
        });

        // Add select all button event listener
        $('#selectAllFields').off('click').on('click', () => {
            $('.custom-control-input').prop('checked', true);
            allFields.forEach(field => {
                dataManager.selectedFields.add(field);
            });
            dataManager.saveSelectedFields();
            updatePreviewTable();
        });

        // Add reset button event listener
        $('#resetFields').off('click').on('click', () => {
            dataManager.resetToDefaultFields();
            // Update checkboxes to match default fields
            $('.custom-control-input').each(function() {
                const field = $(this).attr('id').replace('field_', '');
                $(this).prop('checked', dataManager.selectedFields.has(field));
            });
            updatePreviewTable();
        });
    }

    // Add export button event listener
    $('#exportXLSX').click(() => {
        exportManager.exportToXLSX();
        $('#previewModal').modal('hide');
    });

    $('#exportCSV').click(() => {
        exportManager.exportToCSV();
        $('#previewModal').modal('hide');
    });

    $('#exportJSON').click(() => {
        exportManager.exportToJSON();
        $('#previewModal').modal('hide');
    });

    // Add clear data button event listener
    $('#clearData').click(() => {
        $('#confirmClearModal').modal('show');
    });

    // Add confirm clear button event listener
    $('#confirmClear').click(() => {
        dataManager.data.clear();
        dataManager.errorLog = [];
        updateButtonText();
        updatePreviewTable();
        $('#confirmClearModal').modal('hide');
        $('#previewModal').modal('hide');
    });

    // Add Font Awesome for icons
    const fontAwesomeLink = $('<link>', {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
    });
    $('head').append(fontAwesomeLink);

})();
