/**
 * Префикс для задач из JIRA
 * @type {string}
 */
const JIRA_TAG = 'DMH';

module.exports = {
  JIRA_TAG,

  /**
   * Регулярка, ищет в строке наличие задачи JIRA
   */
  regexpTicket: new RegExp(`${JIRA_TAG}-\\d{1,5}`),

  /**
   * Допустимые префиксы у ветки
   */
  branchPrefix: [
    'feature/',
    'bugfix/',
    'release/',
  ],

  /**
   * Правила именования branches
   */
  branchNamingRules: {
    minLength: 5,
    maxLength: 120,

    searchTicketInStart: new RegExp(`^${JIRA_TAG}-\\d{1,5}`),

    /**
     * Разделитель, идущий после номера номером задачи
     */
    separatorAfterTicket: '_',

    /**
     * Проверка именования ветки. Проверяется правая часть, после префикса
     * стиль нейминга camelCase | snack_case | etc
     */
    namingKind: /^([a-z]([a-z0-9])+)(_[a-z]([a-z0-9])+)*$/,
    namingKindError: 'The name of the branch must be in the shack_case',

    prefix: [
      {
        value: 'feature/',
        hasTicket: false,
      },
      {
        value: 'bugfix/',
        hasTicket: false,
      },
    ],
  },
};
