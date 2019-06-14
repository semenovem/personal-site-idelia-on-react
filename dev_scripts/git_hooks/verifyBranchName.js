const DIVIDER = '\n - ';


/**
 * Валидация названия git branch
 * @param rules {{ minLength: number, maxLength: number, namingKind: RegExp, namingKindError: string, hasTicket: boolean, searchTicketInStart: RegExp, separatorAfterTicket: string, prefix: Array<{value: string, hasTicket: string}> }}
 * @param fullNameBranch {string}
 * @returns {string | Array<string>}
 */
function verifyBranchName(rules, fullNameBranch) {
  let prefix;
  let ruleForPrefix;
  const errors = [];

  // find prefix
  rules.prefix.some(it => {
    if (fullNameBranch.startsWith(it.value)) {
      ruleForPrefix = it;
      prefix = it.value;
      return true;
    }

    return false;
  });

  if (!prefix) {
    // нет префикса у ветки
    return DIVIDER + [
      'Unknown branch prefix type. Make sure you are using one of this prefixes:',
      ...rules.prefix.map((it, index) => `\t${index + 1}. ${it.value}`),
    ].join('\n');
  }

  let nameBranch = fullNameBranch.slice(prefix.length);

  if (!nameBranch) {
    return `${DIVIDER} Branch name should not be empty`;
  }

  const hasTicket = ruleForPrefix.hasTicket || rules.hasTicket;
  const namingKing = ruleForPrefix.namingKind || rules.namingKind;
  const namingKingError = ruleForPrefix.namingKindError || rules.namingKindError;
  const minLength = ruleForPrefix.minLength || rules.minLength;
  const maxLength = ruleForPrefix.maxLength || rules.maxLength;
  const separatorAfterTicket = ruleForPrefix.separatorAfterTicket || rules.separatorAfterTicket;

  if (hasTicket) {
    if (!rules.searchTicketInStart.test(nameBranch)) {
      errors.push(`Did you forget to add a valid ticket link ${rules.searchTicketInStart.toString()}?`);
    } else {
      nameBranch = nameBranch.replace(rules.searchTicketInStart, '');

      if (!nameBranch.startsWith(separatorAfterTicket)) {
        errors.push(`Missing separator "${separatorAfterTicket}" after job number`);
      } else {
        nameBranch = nameBranch.slice(separatorAfterTicket.length);
      }
    }
  }

  if (!namingKing.test(nameBranch)) {
    errors.push(namingKingError);
  }

  if (minLength > nameBranch.length) {
    errors.push("Your branch name is too short");
  }

  if (maxLength < nameBranch.length) {
    errors.push("Your branch name is too long");
  }

  if (!errors.length) {
    return undefined;
  }

  return DIVIDER + errors.join(DIVIDER);
}

module.exports = verifyBranchName;
