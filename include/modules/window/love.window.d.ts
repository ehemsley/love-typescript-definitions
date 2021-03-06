declare namespace love {

    /**
     * Provides an interface for modifying and retrieving information about the
     * program's window.
     * @noSelf
     * @link [love.window](https://love2d.org/wiki/love.window)
     */
    export namespace window {
        /**
         * Closes the window. It can be reopened with love.window.setMode.
         *
         */
        export function close(): void;

        /**
         * Converts a number from pixels to density-independent units.
         *
         *
         * The pixel density inside the window might be greater (or smaller) than the
         * "size" of the window. For example on a retina screen in Mac OS X with the
         * highdpi window flag enabled, the window may take up the same physical size as
         * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
         * love.window.fromPixels(1600) would return 800 in that case.
         *
         *
         * This function converts coordinates from pixels to the size users are expecting
         * them to display at onscreen. love.window.toPixels does the opposite. The
         * highdpi window flag must be enabled to use the full pixel density of a Retina
         * screen on Mac OS X and iOS. The flag currently does nothing on Windows and
         * Linux, and on Android it is effectively always enabled.
         *
         *
         * Most LÖVE functions return values and expect arguments in terms of pixels
         * rather than density-independent units.
         *
         * @param pixelvalue A number in pixels to convert to density-independent units.
         * @return {number} value, The converted number, in density-independent units.
         */
        export function fromPixels(pixelvalue: number): number;

        /**
         * Converts a number from pixels to density-independent units.
         *
         *
         * The pixel density inside the window might be greater (or smaller) than the
         * "size" of the window. For example on a retina screen in Mac OS X with the
         * highdpi window flag enabled, the window may take up the same physical size as
         * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
         * love.window.fromPixels(1600) would return 800 in that case.
         *
         *
         * This function converts coordinates from pixels to the size users are expecting
         * them to display at onscreen. love.window.toPixels does the opposite. The
         * highdpi window flag must be enabled to use the full pixel density of a Retina
         * screen on Mac OS X and iOS. The flag currently does nothing on Windows and
         * Linux, and on Android it is effectively always enabled.
         *
         *
         * Most LÖVE functions return values and expect arguments in terms of pixels
         * rather than density-independent units.
         *
         * @param px The x-axis value of a coordinate in pixels.
         * @param py The y-axis value of a coordinate in pixels.
         * @return {number} x, The converted x-axis value of the coordinate, in density-independent units.
         * @return {number} y, The converted y-axis value of the coordinate, in density-independent units.
         */
        /** @tupleReturn */
        export function fromPixels(px: number, py: number): [number, number];

        /**
         * Gets the name of a display.
         *
         * @param displayindex The index of the display to get the name of.
         * @return {string} name, The name of the specified display.
         */
        export function getDisplayName(displayindex: number): string;

        /**
         * Gets the DPI scale factor associated with the window.
         *
         *
         * The pixel density inside the window might be greater (or smaller) than the
         * "size" of the window. For example on a retina screen in Mac OS X with the
         * highdpi window flag enabled, the window may take up the same physical size as
         * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
         * love.window.getDPIScale() would return 2.0 in that case.
         *
         *
         * The love.window.fromPixels and love.window.toPixels functions can also be used
         * to convert between units.
         *
         *
         * The highdpi window flag must be enabled to use the full pixel density of a
         * Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows
         * and Linux, and on Android it is effectively always enabled.
         *
         * @return {number} scale, The pixel scale factor associated with the window.
         */
        export function getDPIScale(): number;

        /**
         * Gets the width and height of the desktop.
         * @param display The index of the display, if multiple monitors are available. (Default 1)
         * @return width, The width of the desktop.
         * @return height, The height of the desktop.
         * @link [love.window.getDesktopDimensions](https://love2d.org/wiki/love.window.getDesktopDimensions)
         */
        export function getDesktopDimensions(display?: number): [number, number];

        /**
         * Gets the number of connected monitors.
         * @return {number} count, The number of currently connected displays.
         * @link [love.window.getDisplayCount](https://love2d.org/wiki/love.window.getDisplayCount)
         */
        export function getDisplayCount(): number;

        /**
         * Gets whether the window is fullscreen.
         *
         * @return {boolean} fullscreen, True if the window is fullscreen, false otherwise.
         * @return {FullscreenType} fstype, The type of fullscreen mode used.
         */
        /** @tupleReturn */
        export function getFullscreen(): [boolean, FullscreenType];

        /**
         * Gets a list of supported fullscreen modes.
         *
         * @param display The index of the display, if multiple monitors are available.
         * @return {table} modes, A table of width/height pairs. (Note that this may not be in order.)
         */
        export function getFullscreenModes(display?: number): table;

        /**
         * Gets the window icon.
         *
         * @return {ImageData} imagedata, The window icon imagedata, or nil of no icon has been set with love.window.setIcon.
         */
        export function getIcon(): ImageData;

        /**
         * Returns the current display mode.
         *
         * @return {number} width, Window width.
         * @return {number} height, Window height.
         * @return {table} flags, Table containing the window properties.
         */
        /** @tupleReturn */
        export function getMode(): [number, number, table];

        /**
         * Gets the DPI scale factor associated with the window.
         *
         *
         * The pixel density inside the window might be greater (or smaller) than the
         * "size" of the window. For example on a retina screen in Mac OS X with the
         * highdpi window flag enabled, the window may take up the same physical size as
         * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
         * love.window.getPixelScale() would return 2.0 in that case.
         *
         *
         * The love.window.fromPixels and love.window.toPixels functions can also be used
         * to convert between units.
         *
         *
         * The highdpi window flag must be enabled to use the full pixel density of a
         * Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows
         * and Linux, and on Android it is effectively always enabled.
         *
         * @return {number} scale, The pixel scale factor associated with the window.
         */
        export function getPixelScale(): number;

        /**
         * Gets the position of the window on the screen.
         *
         *
         * The window position is in the coordinate space of the display it is currently
         * in.
         *
         * @return {number} x, The x-coordinate of the window's position.
         * @return {number} y, The y-coordinate of the window's position.
         * @return {number} display, The index of the display that the window is in.
         */
        /** @tupleReturn */
        export function getPosition(): [number, number, number];

        /**
         * Gets the window title.
         *
         * @return {string} title, The current window title.
         */
        export function getTitle(): string;

        /**
         * Checks if the game window has keyboard focus.
         *
         * @return {boolean} focus, True if the window has the focus or false if not.
         */
        export function hasFocus(): boolean;

        /**
         * Checks if the game window has mouse focus.
         *
         * @return {boolean} focus, True if the window has mouse focus or false if not.
         */
        export function hasMouseFocus(): boolean;

        /**
         * Gets whether the display is allowed to sleep while the program is running.
         *
         *
         * Display sleep is disabled by default. Some types of input (e.g. joystick button
         * presses) might not prevent the display from sleeping, if display sleep is
         * allowed.
         *
         * @return {boolean} enabled, True if system display sleep is enabled / allowed, false otherwise.
         */
        export function isDisplaySleepEnabled(): boolean;

        /**
         * Gets whether the Window is currently maximized.
         *
         *
         * The window can be maximized if it is not fullscreen and is resizable, and
         * either the user has pressed the window's Maximize button or
         * love.window.maximize has been called.
         *
         * @return {boolean} maximized, True if the window is currently maximized in windowed mode, false otherwise.
         */
        export function isMaximized(): boolean;

        /**
         * Gets whether the Window is currently minimized.
         *
         * @return {boolean} maximized, True if the window is currently minimized, false otherwise.
         */
        export function isMinimized(): boolean;

        /**
         * Checks if the window is open.
         *
         * @return {boolean} open, True if the window is open, false otherwise.
         */
        export function isOpen(): boolean;

        /**
         * Checks if the game window is visible.
         *
         *
         * The window is considered visible if it's not minimized and the program isn't
         * hidden.
         *
         * @return {boolean} visible, True if the window is visible or false if not.
         */
        export function isVisible(): boolean;

        /**
         * Makes the window as large as possible.
         *
         *
         * This function has no effect if the window isn't resizable, since it essentially
         * programmatically presses the window's "maximize" button.
         *
         */
        export function maximize(): void;

        /**
         * Minimizes the window to the system's task bar / dock.
         *
         */
        export function minimize(): void;

        /**
         * Restores the size and position of the window if it was minimized or maximized.
         *
         */
        export function restore(): void;

        /**
         * Causes the window to request the attention of the user if it is not in the
         * foreground.
         *
         *
         * In Windows the taskbar icon will flash, and in OS X the dock icon will bounce.
         *
         * @param continuous Whether to continuously request attention until the window becomes active, or to do it only once.
         */
        export function requestAttention(continuous?: boolean): void;

        /**
         * Sets whether the display is allowed to sleep while the program is running.
         *
         *
         * Display sleep is disabled by default. Some types of input (e.g. joystick button
         * presses) might not prevent the display from sleeping, if display sleep is
         * allowed.
         *
         * @param enable True to enable system display sleep, false to disable it.
         */
        export function setDisplaySleepEnabled(enable: boolean): void;

        /**
         * Enters or exits fullscreen. The display to use when entering fullscreen is
         * chosen based on which display the window is currently in, if multiple monitors
         * are connected.
         *
         *
         * If fullscreen mode is entered and the window size doesn't match one of the
         * monitor's display modes (in normal fullscreen mode) or the window size doesn't
         * match the desktop size (in 'desktop' fullscreen mode), the window will be
         * resized appropriately. The window will revert back to its original size again
         * when fullscreen mode is exited using this function.
         *
         * @param fullscreen Whether to enter or exit fullscreen mode.
         * @return {boolean} success, True if successful, false otherwise.
         */
        export function setFullscreen(fullscreen: boolean): boolean;

        /**
         * Enters or exits fullscreen. The display to use when entering fullscreen is
         * chosen based on which display the window is currently in, if multiple monitors
         * are connected.
         *
         *
         * If fullscreen mode is entered and the window size doesn't match one of the
         * monitor's display modes (in normal fullscreen mode) or the window size doesn't
         * match the desktop size (in 'desktop' fullscreen mode), the window will be
         * resized appropriately. The window will revert back to its original size again
         * when fullscreen mode is exited using this function.
         *
         * @param fullscreen Whether to enter or exit fullscreen mode.
         * @param fstype The type of fullscreen mode to use.
         * @return {boolean} success, True if successful, false otherwise.
         */
        export function setFullscreen(fullscreen: boolean, fstype: FullscreenType): boolean;

        /**
         * Sets the window icon until the game is quit. Not all operating systems support
         * very large icon images.
         *
         * @param imagedata The window icon image.
         * @return {boolean} success, Whether the icon has been set successfully.
         */
        export function setIcon(imagedata: ImageData): boolean;

        /**
         * Sets the display mode and properties of the window.
         *
         *
         * If width or height is 0, setMode will use the width and height of the desktop.
         *
         *
         * Changing the display mode may have side effects: for example, canvases will be
         * cleared and values sent to shaders with Shader:send will be erased. Make sure
         * to save the contents of canvases beforehand or re-draw to them afterward if you
         * need to.
         *
         * @param width Display width.
         * @param height Display height.
         * @param flags The flags table with the options:
         * @return {boolean} success, True if successful, false otherwise.
         */
        export function setMode(width: number, height: number, flags: table): boolean;

        /**
         * Sets the position of the window on the screen.
         *
         *
         * The window position is in the coordinate space of the specified display.
         *
         * @param x The x-coordinate of the window's position.
         * @param y The y-coordinate of the window's position.
         * @param display The index of the display that the new window position is relative to.
         */
        export function setPosition(x: number, y: number, display: number): void;

        /**
         * Sets the window title.
         *
         * @param title The new window title.
         */
        export function setTitle(title: string): void;

        /**
         * Displays a message box dialog above the love window. The message box contains a
         * title, optional text, and buttons.
         *
         * @param title The title of the message box.
         * @param message The text inside the message box.
         * @param type The type of the message box.
         * @param attachtowindow Whether the message box should be attached to the love window or free-floating.
         * @return {boolean} success, Whether the message box was successfully displayed.
         */
        export function showMessageBox(title: string, message: string, type?: MessageBoxType, attachtowindow?: boolean): boolean;

        /**
         * Displays a message box dialog above the love window. The message box contains a
         * title, optional text, and buttons.
         *
         * @param title The title of the message box.
         * @param message The text inside the message box.
         * @param buttonlist A table containing a list of button names to show. The table can also contain the fields enterbutton and escapebutton, which should be the index of the default button to use when the user presses 'enter' or 'escape', respectively.
         * @param type The type of the message box.
         * @param attachtowindow Whether the message box should be attached to the love window or free-floating.
         * @return {number} pressedbutton, The index of the button pressed by the user. May be 0 if the message box dialog was closed without pressing a button.
         */
        export function showMessageBox(title: string, message: string, buttonlist: table, type?: MessageBoxType, attachtowindow?: boolean): number;

        /**
         * Converts a number from density-independent units to pixels.
         *
         *
         * The pixel density inside the window might be greater (or smaller) than the
         * "size" of the window. For example on a retina screen in Mac OS X with the
         * highdpi window flag enabled, the window may take up the same physical size as
         * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
         * love.window.toPixels(800) would return 1600 in that case.
         *
         *
         * This is used to convert coordinates from the size users are expecting them to
         * display at onscreen to pixels. love.window.fromPixels does the opposite. The
         * highdpi window flag must be enabled to use the full pixel density of a Retina
         * screen on Mac OS X and iOS. The flag currently does nothing on Windows and
         * Linux, and on Android it is effectively always enabled.
         *
         *
         * Most LÖVE functions return values and expect arguments in terms of pixels
         * rather than density-independent units.
         *
         * @param value A number in density-independent units to convert to pixels.
         * @return {number} pixelvalue, The converted number, in pixels.
         */
        export function toPixels(value: number): number;

        /**
         * Converts a number from density-independent units to pixels.
         *
         *
         * The pixel density inside the window might be greater (or smaller) than the
         * "size" of the window. For example on a retina screen in Mac OS X with the
         * highdpi window flag enabled, the window may take up the same physical size as
         * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
         * love.window.toPixels(800) would return 1600 in that case.
         *
         *
         * This is used to convert coordinates from the size users are expecting them to
         * display at onscreen to pixels. love.window.fromPixels does the opposite. The
         * highdpi window flag must be enabled to use the full pixel density of a Retina
         * screen on Mac OS X and iOS. The flag currently does nothing on Windows and
         * Linux, and on Android it is effectively always enabled.
         *
         *
         * Most LÖVE functions return values and expect arguments in terms of pixels
         * rather than density-independent units.
         *
         * @param x The x-axis value of a coordinate in density-independent units to convert to pixels.
         * @param y The y-axis value of a coordinate in density-independent units to convert to pixels.
         * @return {number} px, The converted x-axis value of the coordinate, in pixels.
         * @return {number} py, The converted y-axis value of the coordinate, in pixels.
         */
        /** @tupleReturn */
        export function toPixels(x: number, y: number): [number, number];

        /**
         * Sets the display mode and properties of the window, without modifying
         * unspecified properties.
         *
         *
         * If width or height is 0, updateMode will use the width and height of the
         * desktop.
         *
         *
         * Changing the display mode may have side effects: for example, canvases will be
         * cleared. Make sure to save the contents of canvases beforehand or re-draw to
         * them afterward if you need to.
         *
         * @param width Window width.
         * @param height Window height.
         * @param settings The settings table with the following optional fields. Any field not filled in will use the current value that would be returned by love.window.getMode.
         * @return {boolean} success, True if successful, false otherwise.
         */
        export function updateMode(width: number, height: number, settings: table): boolean;

    }

}
