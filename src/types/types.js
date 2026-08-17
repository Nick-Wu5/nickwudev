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
 * @typedef {Object} SubpageData
 * @property {string} id
 * @property {"work"|"project"} kind
 * @property {{name: string, logoSrc: string, logoAlt: string}} org
 * @property {string} title
 * @property {string} dateRange
 * @property {string[]} tags
 * @property {Array<ParagraphBlock|MediaBlock>} body
 */

export {};
