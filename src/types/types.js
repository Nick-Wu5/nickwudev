/**
 * @typedef {Object} ParagraphBlock
 * @property {"paragraph"} type
 * @property {string} text
 */

/**
 * @typedef {Object} MediaBlock
 * @property {"media"} type
 * @property {string} src
 * @property {string} alt
 * @property {string} [caption]
 * @property {"image"|"gif"} kind
 */

/**
 * @typedef {Object} Entry
 * @property {string} id
 * @property {"work"|"project"} kind
 * @property {{thumbnailSource: string, thumbnailAlt: string}} thumbnail
 * @property {{name: string, logoSrc: string, logoAlt: string}} org
 * @property {string} title
 * @property {Date} startDate
 * @property {Date} endDate
 * @property {string[]} tags
 * @property {Array<ParagraphBlock|MediaBlock>} body
 * @property {boolean} [pinLast]
 */

export {};
