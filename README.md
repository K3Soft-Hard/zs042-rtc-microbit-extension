
> Open this page at [https://k3soft-hard.github.io/zs042-rtc-microbit-extension/](https://k3soft-hard.github.io/zs042-rtc-microbit-extension/)

## Introduction

Extension for rtc zs042 with ds3231 chip

## Usage Example

* Show time array
```blocks
input.onButtonPressed(Button.A, function () {
    time_array = ZS042.getTime()
    basic.showString("" + time_array[0] + ":" + time_array[1])
})
let time_array: number[] = []
ZS042.setTime(17, 10, 0)
```

* Show time string
```blocks
input.onButtonPressed(Button.A, function () {
    basic.showString(ZS042.getTimeString())
})
basic.forever(function () {
    ZS042.setTime(0, 0, 0)
})
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/k3soft-hard/zs042-rtc-microbit-extension** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/k3soft-hard/zs042-rtc-microbit-extension** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
