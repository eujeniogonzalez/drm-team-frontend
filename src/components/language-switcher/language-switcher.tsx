import './language-switcher.scss';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getLanguageCode } from '../../store/processes/user-process/user-selectors';
import { LanguageCodes } from '../../const/languages-const';
import { setLanguageCode } from '../../store/processes/user-process/user-process';

// todo Подумать вынести в константы
const LANGUAGE_SWITCHER_CLASSES = {
  [LanguageCodes.English]: 'switcher-lever-english',
  [LanguageCodes.Russian]: 'switcher-lever-russian'
};

const LANGUAGE_SWITCHER_IMAGE_CLASSES = {
  [LanguageCodes.English]: 'switcher-lever-image-english-visible',
  [LanguageCodes.Russian]: 'switcher-lever-image-russia-visible'
};

function LanguageSwitcher() {
  const dispatch = useAppDispatch();
  const languageCode = useAppSelector(getLanguageCode);
  const [leverPosition, setLeverPosition] = useState(LANGUAGE_SWITCHER_CLASSES[languageCode]);

  useEffect(() => {
    setLeverPosition(LANGUAGE_SWITCHER_CLASSES[languageCode]);
  }, [languageCode]);

  const languageSwitcherClickHandler = () => {
    switch (languageCode) {
      case LanguageCodes.English:
        dispatch(setLanguageCode(LanguageCodes.Russian));
        break;

      case LanguageCodes.Russian:
        dispatch(setLanguageCode(LanguageCodes.English));
        break;
    }
  };

  const leverVisibleRussia = languageCode === LanguageCodes.Russian ? 'switcher-lever-image-russia-visible' : ''; // todo Заменить на константу
  const leverVisibleEnglish = languageCode === LanguageCodes.English ? 'switcher-lever-image-english-visible' : ''; // todo Заменить на константу

  return (
    <div
      className={`language-switcher`}
      onClick={languageSwitcherClickHandler}
    >
      <div className={`switcher-lever ${leverPosition}`}>
        <div className={`switcher-lever-image-russia ${leverVisibleRussia}`}></div>
        <div className={`switcher-lever-image-english ${leverVisibleEnglish}`}></div>
      </div>
    </div>
  );
}

export default LanguageSwitcher;

