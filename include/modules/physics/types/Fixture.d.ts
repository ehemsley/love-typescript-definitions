/**
 * Fixtures attach shapes to bodies.
 * @link [Fixture](https://love2d.org/wiki/Fixture)
 */
declare interface Fixture extends Object {
    /**
     * Destroys the fixture
     *
     */
    destroy(): void;

    /**
     * Returns the body to which the fixture is attached.
     *
     * @return {Body} body, The parent body.
     */
    getBody(): Body;

    /**
     * Returns the points of the fixture bounding box. In case the fixture has
     * multiple children a 1-based index can be specified. For example, a fixture will
     * have multiple children with a chain shape.
     *
     * @param index A bounding box of the fixture.
     * @return {number} topLeftX, The x position of the top-left point.
     * @return {number} topLeftY, The y position of the top-left point.
     * @return {number} bottomRightX, The x position of the bottom-right point.
     * @return {number} bottomRightY, The y position of the bottom-right point.
     */
    /** @tupleReturn */
    getBoundingBox(index?: number): [number, number, number, number];

    /**
     * Returns the categories the fixture belongs to.
     *
     * @return {number} category1, The first category.
     * @return {number} category2, The second category.
     * @return {number} ..., Additional categories.
     */
    /** @tupleReturn */
    getCategory(): [number, number, number];

    /**
     * Returns the density of the fixture.
     *
     * @return {number} density, The fixture density in kilograms per square meter.
     */
    getDensity(): number;

    /**
     * Returns the filter data of the fixture. Categories and masks are encoded as the
     * bits of a 16-bit integer.
     *
     * @return {number} categories, The categories as an integer from 0 to 65535.
     * @return {number} mask, The mask as an integer from 0 to 65535.
     * @return {number} group, The group as an integer from -32768 to 32767.
     */
    /** @tupleReturn */
    getFilterData(): [number, number, number];

    /**
     * Returns the friction of the fixture.
     *
     * @return {number} friction, The fixture friction.
     */
    getFriction(): number;

    /**
     * Returns the group the fixture belongs to. Fixtures with the same group will
     * always collide if the group is positive or never collide if it's negative. The
     * group zero means no group.
     *
     *
     * The groups range from -32768 to 32767.
     *
     * @return {number} group, The group of the fixture.
     */
    getGroupIndex(): number;

    /**
     * Returns the category mask of the fixture.
     *
     * @return {number} mask1, The first category selected by the mask.
     * @return {number} mask2, The second category selected by the mask.
     * @return {number} ..., Additional categories selected by the mask.
     */
    /** @tupleReturn */
    getMask(): [number, number, number];

    /**
     * Returns the mass, its center and the rotational inertia.
     *
     * @return {number} x, The x position of the center of mass.
     * @return {number} y, The y position of the center of mass.
     * @return {number} mass, The mass of the fixture.
     * @return {number} inertia, The rotational inertia.
     */
    /** @tupleReturn */
    getMassData(): [number, number, number, number];

    /**
     * Returns the restitution of the fixture.
     *
     * @return {number} restitution, The fixture restitution.
     */
    getRestitution(): number;

    /**
     * Returns the shape of the fixture. This shape is a reference to the actual data
     * used in the simulation. It's possible to change its values between timesteps.
     *
     *
     * Do not call any functions on this shape after the parent fixture has been
     * destroyed. This shape will point to an invalid memory address and likely cause
     * crashes if you interact further with it.
     *
     * @return {Shape} shape, The fixture's shape.
     */
    getShape(): Shape;

    /**
     * Returns the Lua value associated with this fixture.
     *
     *
     * Use this function in one thread only.
     *
     * @return {any} value, The Lua value associated with the fixture.
     */
    getUserData(): any;

    /**
     * Gets whether the Fixture is destroyed. Destroyed fixtures cannot be used.
     *
     * @return {boolean} destroyed, Whether the Fixture is destroyed.
     */
    isDestroyed(): boolean;

    /**
     * Returns whether the fixture is a sensor.
     *
     * @return {boolean} sensor, If the fixture is a sensor.
     */
    isSensor(): boolean;

    /**
     * Casts a ray against the shape of the fixture and returns the surface normal
     * vector and the line position where the ray hit. If the ray missed the shape,
     * nil will be returned.
     *
     *
     * The ray starts on the first point of the input line and goes towards the second
     * point of the line. The fourth argument is the maximum distance the ray is going
     * to travel as a scale factor of the input line length.
     *
     *
     * The childIndex parameter is used to specify which child of a parent shape, such
     * as a ChainShape, will be ray casted. For ChainShapes, the index of 1 is the
     * first edge on the chain. Ray casting a parent shape will only test the child
     * specified so if you want to test every shape of the parent, you must loop
     * through all of its children.
     *
     *
     * The world position of the impact can be calculated by multiplying the line
     * vector with the third return value and adding it to the line starting point.
     *
     *
     * hitx, hity = x1 + (x2 - x1) * fraction, y1 + (y2 - y1) * fraction
     *
     * @param x1 The x position of the ray starting point.
     * @param y1 The y position of the ray starting point.
     * @param x2 The x position of the ray end point.
     * @param y2 The y position of the ray end point.
     * @param maxFraction The maximum distance the ray is going to travel as a number from 0 to 1.
     * @param childIndex The index of the child the ray gets cast against.
     * @return {number} x, The x position where the ray intersects with the shape.
     * @return {number} y, The y position where the ray intersects with the shape.
     * @return {number} fraction, The position on the input vector where the intersection happened as a number from 0 to 1.
     */
    /** @tupleReturn */
    rayCast(x1: number, y1: number, x2: number, y2: number, maxFraction: number, childIndex?: number): [number, number, number];

    /**
     * Sets the categories the fixture belongs to. There can be up to 16 categories
     * represented as a number from 1 to 16.
     *
     * @param category1 The first category.
     * @param ... Additional categories.
     */
    setCategory(category1: number, ...vararg: Array<number>): void;

    /**
     * Sets the density of the fixture. Call Body:resetMassData if this needs to take
     * effect immediately.
     *
     * @param density The fixture density in kilograms per square meter.
     */
    setDensity(density: number): void;

    /**
     * Sets the filter data of the fixture.
     *
     *
     * Groups, categories, and mask can be used to define the collision behaviour of
     * the fixture.
     *
     *
     * If two fixtures are in the same group they either always collide if the group
     * is positive, or never collide if it's negative. If the group is zero or they do
     * not match, then the contact filter checks if the fixtures select a category of
     * the other fixture with their masks. The fixtures do not collide if that's not
     * the case. If they do have each other's categories selected, the return value of
     * the custom contact filter will be used. They always collide if none was set.
     *
     *
     * There can be up to 16 categories. Categories and masks are encoded as the bits
     * of a 16-bit integer.
     *
     * @param categories The categories as an integer from 0 to 65535.
     * @param mask The mask as an integer from 0 to 65535.
     * @param group The group as an integer from -32768 to 32767.
     */
    setFilterData(categories: number, mask: number, group: number): void;

    /**
     * Sets the friction of the fixture.
     *
     * @param friction The fixture friction.
     */
    setFriction(friction: number): void;

    /**
     * Sets the group the fixture belongs to. Fixtures with the same group will always
     * collide if the group is positive or never collide if it's negative. The group
     * zero means no group.
     *
     *
     * The groups range from -32768 to 32767.
     *
     * @param group The group as an integer from -32768 to 32767.
     */
    setGroupIndex(group: number): void;

    /**
     * Sets the category mask of the fixture. There can be up to 16 categories
     * represented as a number from 1 to 16.
     *
     *
     * This fixture will collide with the fixtures that are in the selected categories
     * if the other fixture also has a category of this fixture selected.
     *
     * @param mask1 The first category.
     * @param ... Additional categories.
     */
    setMask(mask1: number, ...vararg: Array<number>): void;

    /**
     * Sets the restitution of the fixture.
     *
     * @param restitution The fixture restitution.
     */
    setRestitution(restitution: number): void;

    /**
     * Sets whether the fixture should act as a sensor.
     *
     *
     * Sensor do not produce collisions responses, but the begin and end callbacks
     * will still be called for this fixture.
     *
     * @param sensor The sensor status.
     */
    setSensor(sensor: boolean): void;

    /**
     * Associates a Lua value with the fixture.
     *
     *
     * Use this function in one thread only.
     *
     * @param value The Lua value associated with the fixture.
     */
    setUserData(value: any): void;

    /**
     * Checks if a point is inside the shape of the fixture.
     *
     * @param x The x position of the point.
     * @param y The y position of the point.
     * @return {boolean} isInside, True if the point is inside or false if it is outside.
     */
    testPoint(x: number, y: number): boolean;

}
