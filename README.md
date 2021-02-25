# sesame-in-firefoxish
## Disclaimer

So first off, this method is extremely scuffed and only for the most die-hard Chrome haters who frequently close their applications. Sesame has the option to have a separate window so you can just turn that on, close chrome, and viola!

However this guide is for people who despise the idea of even opening Chrome (though you still need it installed) and don’t mind some finangling.


## What is Sesame and why isn’t it on Firefox?

Sesame is an online web extension that allows users to experience a virtual dorm life and is currently being developed by students at Stanford. While they stated that a Firefox version will come out in the future, I thought that Chrome and Firefox had similar enough structures that a porting would be easy. After all, Firefox supports many general commands like chrome. It turns out that it’s not so simple. 

The struggles first start with Firebase and its refusal to work on Firefox. Even though the web app works fine regardless of browser, web _extensions_ in particular only work on Chrome/Chromium versions. While it _is_ possible to circumnavigate this, the next issue is the native-messaging client. A native-messaging client is basically the ability to run code from a server onto an extension which allows for both security and privacy. The problem is that Firefox and Chrome have minor differences in syntax that result in a completely dysfunctional port. Even after that, I’m not sure what additional hurdles would appear as I obviously don’t have access to the source code.

Another inconvenience is the differences between manifest.json standards from Firefox to Chrome which a basic port resulted in a very angry Firefox debugger. Only after removing some URLs and features did Firefox calm down but I would imagine launching Sesame in this state would be cataclysmic.

Some fun facts I learned were that:



1.  Firefox debugging actually shows the JS currently used by the extension so you can see what the garbled mess is supposed to be.
2. You can’t overwrite any of the files in the extension since their backend just uses/gets their own version
3. It’s really hard trying to get help since my problem is incredibly niche
4. Stanford kids are really built different. I have no idea how many of the networking and callbacks work.

With that in mind, let’s get started with actually creating a “port”


## Getting Started

So you will need the following major components



1. [Open in Chrome](https://addons.mozilla.org/en-US/firefox/addon/open-in-chrome-browser/) - A firefox extensions that allows you to open links in Chrome
2. testweb.html - I will get a better name for this but this is a key part of the program
3. My custom chrome extension called “open sesame window extension” - creative AND original
4. An easily accessible place for a hyperlink

The fourth one is optional but highly recommended for ease of use

To install this hack:



1. Install Sesame (duh)
2. Install the Open in Chrome extension to Firefox and the custom extension to Chrome
3. Follow the instructions for Open in Chrome to pair the two browsers
4. Get the system URL for the testweb.html

To use the hack:



1. Right click on the testweb.html url in Firefox
2. The option to open the link in chrome should appear
3. Once clicked, a chrome window will appear followed by the Sesame extension popped out, then the chrome window will disappear


## Why does this work?

Let’s break it down to a few components: The custom extension, testweb.html, Chrome extension shenanigans, and how Open in Chrome works in all of this.

The custom extension

This extension basically checks to see if a window in Chrome has loaded. If it has then it’ll open Sesame. Pretty simple but it turns out that opening Chrome for the first time will not suffice. You need to load a page AFTER opening Chrome and so testweb.html was created.

testweb.html

The purpose of this website is to only refresh once and then close itself. Normally browsers do not allow standard websites to close themselves BUT Open in Chrome somehow bypasses this and causes Chrome to believe that testweb.html is a popup which allows window.close()  to operate. To refresh once I looked up a solution on stack overflow so that’s pretty nice.

Chrome extension shenanigans

So one issue I thought of when trying to open Sesame is the file directory since the version updates. Luckily for me, Chrome actually uses a shortened URL that only uses the extension’s ID which is tied to the extension itself regardless of version. Since Sesame is an official extension, it’s ID should not change so I can use this directory to ALWAYS open Sesame. In addition, opening Sesame in a new popup window through the extension will automatically do so without messing with the settings.

Open in Chrome

So this is the extension that makes all of this possible. This was developed by somebody else but what’s incredibly convenient is how the opened tab in Chrome is actually a pop-up window! This is most likely because the extension can only open a file in Chrome with the window.open() method or something similar resulting in the pop-up property required for this hack.

Some additional things I want to mention

I might make a Sesame like extension which would be a glorified hyperlink but I would only do it if enough people actually use this (which I doubt).
