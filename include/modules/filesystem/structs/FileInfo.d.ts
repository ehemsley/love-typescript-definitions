/**
 * https://love2d.org/wiki/love.filesystem.getInfo
 */
declare type FileInfo = {

    /**
     * The type of the object at the path (file, directory, symlink, etc.)
     */
    type: FileType;

    /**
     * The size in bytes of the file, or nil if it can't be determined.
     */
    size?: number;

    /**
     * The file's last modification time in seconds since the unix epoch, or nil if it can't be determined.
     */
    modtime?: number;

};
