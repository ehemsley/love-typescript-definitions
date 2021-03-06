/**
 * Shapes are solid 2d geometrical objects which handle the mass and collision of a Body in love.physics.
 * @link [Shape](https://love2d.org/wiki/Shape)
 */
declare interface Shape extends Object {
    /**
     * Returns the points of the bounding box for the transformed shape.
     *
     * @param tx The translation of the shape on the x-axis.
     * @param ty The translation of the shape on the y-axis.
     * @param tr The shape rotation.
     * @param childIndex The index of the child to compute the bounding box of.
     * @return {number} topLeftX, The x position of the top-left point.
     * @return {number} topLeftY, The y position of the top-left point.
     * @return {number} bottomRightX, The x position of the bottom-right point.
     * @return {number} bottomRightY, The y position of the bottom-right point.
     */
    /** @tupleReturn */
    computeAABB(tx: number, ty: number, tr: number, childIndex?: number): [number, number, number, number];

    /**
     * Computes the mass properties for the shape with the specified density.
     *
     * @param density The shape density.
     * @return {number} x, The x postition of the center of mass.
     * @return {number} y, The y postition of the center of mass.
     * @return {number} mass, The mass of the shape.
     * @return {number} inertia, The rotational inertia.
     */
    /** @tupleReturn */
    computeMass(density: number): [number, number, number, number];

    /**
     * Returns the number of children the shape has.
     *
     * @return {number} count, The number of children.
     */
    getChildCount(): number;

    /**
     * Gets the radius of the shape.
     *
     * @return {number} radius, The radius of the shape.
     */
    getRadius(): number;

    /**
     * Gets a string representing the Shape. This function can be useful for
     * conditional debug drawing.
     *
     * @return {ShapeType} type, The type of the Shape.
     */
    getType(): ShapeType;

    /**
     * Casts a ray against the shape and returns the surface normal vector and the
     * line position where the ray hit. If the ray missed the shape, nil will be
     * returned. The Shape can be transformed to get it into the desired position.
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
     * @param x1 The x position of the input line starting point.
     * @param y1 The y position of the input line starting point.
     * @param x2 The x position of the input line end point.
     * @param y2 The y position of the input line end point.
     * @param maxFraction Ray length parameter.
     * @param tx The translation of the shape on the x-axis.
     * @param ty The translation of the shape on the y-axis.
     * @param tr The shape rotation.
     * @param childIndex The index of the child the ray gets cast against.
     * @return {number} xn, The x component of the normal vector of the edge where the ray hit the shape.
     * @return {number} yn, The y component of the normal vector of the edge where the ray hit the shape.
     * @return {number} fraction, The position on the input line where the intersection happened as a factor of the line length.
     */
    /** @tupleReturn */
    rayCast(x1: number, y1: number, x2: number, y2: number, maxFraction: number, tx: number, ty: number, tr: number, childIndex?: number): [number, number, number];

    /**
     * Checks whether a point lies inside the shape. This is particularly useful for
     * mouse interaction with the shapes. By looping through all shapes and testing
     * the mouse position with this function, we can find which shapes the mouse
     * touches.
     *
     * @param x The x component of the point.
     * @param y The y component of the point.
     * @return {boolean} hit, True if inside, false if outside
     */
    testPoint(x: number, y: number): boolean;

}
