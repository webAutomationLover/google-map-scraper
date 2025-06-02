![Banner Image](https://raw.githubusercontent.com/webAutomationLover/google-map-scraper/refs/heads/main/resource/banner.png)

# Google Maps Scraper

**A Tampermonkey script to automate the collection of Google Maps search results, making it easy to export and use local business information.**

## Features

*   Collects local business information from Google Maps search results.
*   Supports automatic scrolling to load more results.
*   Allows you to export collected data in common formats (see Usage).
*   Easy to use, no complex configuration required.

## Prerequisites

**Important:** Google Maps Scraper is only supported on **Firefox browser** and **does not work on Chrome**.

1.  **Install Tampermonkey (Firefox only):**

    Google Maps Scraper requires the Tampermonkey extension to run on Firefox. Please install the following version:

    *   **Firefox:** [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

2.  **Install the Google Maps Scraper script:**

    Click [here](**[INSERT YOUR SCRIPT LINK HERE]**) to install the Google Maps Scraper script.  After installation, Tampermonkey will automatically manage the script.

3.  **Verify successful installation:**

    After installation, open [Google Maps](https://www.google.com/maps). If you see the **"Export"** and **"Start Auto Scroll"** buttons on the page, Google Maps Scraper has been successfully installed and is running. If you don't see these buttons, check that Tampermonkey is enabled and the script is installed correctly.

## Usage

1.  **Open Google Maps:** Visit [Google Maps](https://www.google.com/maps) in your browser.

2.  **Search:** Enter your desired keywords in Google Maps, such as "rent car in New York".

3.  **Script automatically collects and organizes data:** The script will automatically collect and organize the data.

4.  **Export data:** Click the "Export" button to export the collected data in CSV, JSON, and Excel formats.

    **(INSERT EXPORT DATA SCREENSHOT HERE)**  *Screenshot showing the location of the export button and the data content. Preferably showing the format selection.*

    ```csv
    Name,Address,Phone,Rating
    "Coffee Shop A","123 Main St","555-1234","4.5"
    "Restaurant B","456 Oak Ave","555-5678","4.0"
    "Local Store C","789 Pine Ln","789 Pine Ln","3.8"
    ```

5.  **Scroll to load more:** Scroll to the bottom of the page, and the script will automatically load more search results. Repeat this until you have collected enough data.

## Feature: Automatic Scrolling

The script automatically scrolls the page to load more search results, allowing you to collect large amounts of data at once. You don't need to scroll manually; the script does it automatically.

## About Me

I am a developer passionate about web automation. For the past 4 years, I worked at a digital marketing company, developing various productivity tools for the team. Compared to Python, command-line tools, etc., I prefer using Tampermonkey to quickly meet the team's needs because it is more intuitive, eliminates the need to install a development environment, and is more user-friendly. I hope Google Maps Scraper is helpful to you!

## Contact

If you encounter any problems during use or have any new ideas and suggestions, please feel free to contact me via:

*   **Discord Community:** [https://discord.gg/ndt3PwQBgn](https://discord.gg/ndt3PwQBgn)
*   **Email:** extensionkit.rdt001@gmail.com

## Disclaimer

This Google Maps Scraper is intended for educational and research purposes only. By using this Google Maps Scraper, you agree to comply with local and international laws relating to data scraping and privacy. The author and contributors are not responsible for any misuse of this software. This tool must not be used to infringe the rights of others, for unethical purposes, or to use data in an unauthorized or unlawful manner.
