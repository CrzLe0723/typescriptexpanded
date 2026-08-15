# Create Menu

Creates a Retro styled menu with selectable options.
```sig
Retro.UI.Menu.createMenu(
    ["Start", "Options", "Quit"],
    [() => {}, () => {}, () => {}],
    80,
    60,
    80,
    60,
    ""
)
```
## Parameters

- **options**: list of text options shown in the menu
- **callbacks**: list of functions that run when each option is selected
- **x**: horizontal position of the menu
- **y**: vertical position of the menu
- **dimensionX**: width of the menu
- **dimensionY**: height of the menu
- **title**: title of menu

## Example
```blocks
let menu = Retro.UI.Menu.createMenu(
    ["Start", "Options", "Quit"],
    [],
    80,
    60,
    80,
    60,
    "Main Menu"
)
```

```package
retro-fx=github:CrzLe0723/RetroFx
```
