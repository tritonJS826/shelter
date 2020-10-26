1.CSS main page ---------------trit
2.CSS pets Page ---------------dimas
3.routing(in header) ----------dimas
4.burger menu js-animation ----dimas
5.burger css ------------------dimas
5.slider (css) ----------------trit
6.pop up (css) ----------------trit+
7.pagination (js)--------------
8.pagination (css)-------------
9.build, deploy----------------trit


# Порядок сдачи

1. Внимательно ознакомьтесь с документом [„Cross Check Flow“](https://docs.rs.school/#/cross-check-flow).
2. До дедлайна 26.10.2020 23:59 GMT+3 [отправьте свою работу на оценку в **RS App**](https://app.rs.school/course/student/cross-check-submit?course=rs-2020-q3).
3. ❗ Критерии оценки берём из текущего документа. Не из других. Не придумываем сами.

# Порядок проверки

Если выполняются основные пункты условий, но есть недочеты, не указанные в данном документе, их не учитываем. Т.е. баллы не снижаем.  
Если хоть один из пунктов какого-либо условия не выполняется, то за всё условие ставим **0**.  
Проверку *Pixel Perfect* проводить не нужно.  
Базовую проверку проводим в браузере **Google Chrome**. Про браузер **Mozilla Firefox** будет указано отдельно.

## Подготовка

Ознакомиться с требованиями данного документа.  
Ознакомиться с финальной версией дизайна [**Figmа shelter**](https://www.figma.com/file/RJO7A4D5K1V6FykBuSNIz4/shelter)

## Оценка

### Открытие страниц на полностью развернутом окне браузера на десктопе

Максимальный балл за выполнение всех условий: **30**.

-----------------------------------

Если страница `Main Page` открывается, и на странице присутствют все 7 секций, внутри которых набор элемнтов количественно соотвествует дизайну:
- Footer
ставим **+5**.

Если страница `Pets Page` открывается, и на странице присутствют все 3 элемента, внутри которых набор элемнтов количественно соотвествует дизайну:
- Header
- Our friends
- Footer

ставим **+5**.

Если эти элементы на странице `Main Page` при наведении меняют свое состояние, т.е. являются интерактивными:
- Стрелки слайдера в блоке `Our Friends`.
- У карточки питомца появляется тень при наведении. Причем наведение на любое место карточки питомца: картинку, имя, кнопку.
- Кнопка "Learn more" внутри карточки питомца. При наведении на саму кнопку.

ставим **+5**.

Если эти элементы на странице `Pets Page` при наведении меняют свое состояние, т.е. являются интерактивными:
- Элементы меню "About the shelter" и "Our pets".
- У карточки питомца появляется тень при наведении. Причем наведение на любое место карточки питомца: картинку, имя, кнопку.
- Кнопка "Learn more" внутри карточки питомца. При наведении на саму кнопку.
- Активные кнопки пагинации в блоке `Our Friends`. Неактивные кнопки не должны реагировать на наведение.

ставим **+5**.

Если со страницы `Main Page` происходит переход на страницу `Pets Page` по нажатию на
- "Our pets" в меню навигации.
- Кнопку "Make a Friend" в блоке `Not only`.
- Кнопку "Get to know the rest" в блоке `Our Friends`.

ставим **+3**.

Если со страницы `Pets Page` происходит переход на страницу `Main Page` по нажатию на
- "About the shelter" в меню навигации.
- Логотип слева от меню навигации.
- Логотип в бургер меню, если оно есть. Если бургер меню не сделано, то этот пункт не учитывается, а ставим оценку за первые два.

ставим **+3**.

Если в футере на обоих страницах:
- При нажатии на email или его иконку открывается почтовый сервис.
- При нажатии на телефон или его иконку открыватся сервис набора номера.

ставим **+2**.

### Adaptive

Максимальный балл за выполнение всех условий: **30**.

-----------------------------------

Значений ширины экрана при которых мы проверяем правильность верстки и отступа элементов, а также поведения приложения, всего 3.

```
1280 px
768 px
320 px
```   

При проверке в браузере **Mozilla Firefox**, если при изменении размера окна браузера от максимума до 320px не появляется горизонтальной полосы прокрутки, или контент не вылазит за пределы экрана,

ставим **+5**.  

❗ Если, например, при проверке выставлена ширина браузера в 768px, присутствует скролл справа, а картинка не соответствует разметке макета Tablet-768, то надо сделать эмуляцию в режиме responsive, и выставить ширину в 768. Картинка снизу.  
![responsive](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-2/singolo/responsive.png)

При проверке на больших экранах, допустимо либо, что блоки продолжают свой цвет на всю доступную область окна, а сама обертка центрируется. Либо, что макет занимает максимальную ширину в 1280px и центрируется с равными отступами справа и слева, любого цвета. Ни то, ни другое не считается ошибкой.  

Структура страницы должна соответствовать макету, указанному в [**Figmа shelter**](https://www.figma.com/file/RJO7A4D5K1V6FykBuSNIz4/shelter).  
❗ Длину текста и слов по ширине, а также порядок переноса слов по строкам, мы не учитываем при проверке.  

### 1280px <= width

#### Main Page

Если выполняются условия:
- В блоке `How you` в первом ряду 5 элементов, во тором 4.
- Иконки и текст в обоих колонках выравнены по левому краю в блоке `Footer`.

ставим **+3**.

#### Pets Page

Если выполняются условия:
- `Header` всегда видимый, и находится сверху страницы, в том числе при скролле.
- В блоке `Our friends` находится 8 карточек питомцев, 2 ряда по 4 элемента.
- В блоке `Our friends` все элементы и блоки с элементами центрированы.
- При открытии страницы, в пагинации должно быть число "1", а кнопки слева неактивны.
- Иконки и текст в обоих колонках выравнены по левому краю в блоке `Footer`.

ставим **+2**.

### 768px <= width < 1280px

#### Main Page

Если выполняются условия:
- Кнопка "Make a friend" центрирована.
- Все параграфы с текстом выравнены по левому краю в блоке `About the shelter`. Сами блоки центрированы.
- В блоке `How you` 3 ряда по 3 элемента.
- Иконки и текст в обоих колонках выравнены по левому краю в блоке `Footer`.
- Картинка собаки снизу в блоке `Footer` не налазит на текст.

ставим **+3**.

#### Pets Page

Если выполняются условия:
- `Header` всегда видимый, и находится сверху страницы, в том числе при скролле.
- В блоке `Our friends` находится 6 карточек питомцев, 3 ряда по 2 элемента.
- В блоке `Our friends` все элементы и блоки с элементами центрированы.
- При открытии страницы, в пагинации должно быть число "1", а кнопки слева неактивны.
- Картинка собаки снизу в блоке `Footer` не налазит на текст.

ставим **+2**.

### 320px <= width < 768px

#### Main Page

Если выполняются условия:
- Меню в `Header` становится бургер меню.
- Все параграфы с текстом и кнопка центрированы в блоке `Not only`.
- Картинка собаки снизу в блоке `Not only` не налазит на текст.
- Все параграфы с текстом центрированы в блоке `About the shelter`. При этом текст в параграфах, но не заголовке, растянут на всю доступную ширину (stretch).
- В блоке `Our friends` текст, карточка в слйдере, блок с кнопками слайдера, и кнопка снизу центрированы.
- В блоке `Our friends`, в слайдере 1 карточка питомца.
- В блоке `How you` 2 колонки, в перой слева 5 элементов, во второй 4.
- Все параграфы с текстом, а также ссылка с номером карты, центрированы в блоке `You can`. При этом текст в параграфах, но не заголовках и ссылке с номером карты, растянут на всю доступную ширину (stretch).
- Заголовки с текстом, иконка и адрес email, иконка и номер телефона, и картинка собаки в самом низу центрированы в блоке `Footer`.
- Иконки локации и адреса выравнены по левому краю, а сам блок центрирован. Если локации и иконки целиком центрированы - это не ошибка, баллы не снимаем!

ставим **+3**.

#### Pets Page

Если выполняются условия:
- `Header` всегда видимый, и находится сверху страницы, в том числе при скролле.
- Меню в `Header` становится бургер меню.
- В блоке `Our friends` находится 3 карточки питомцев, 1 колонка с 3 элементами.
- В блоке `Our friends` все элементы и блоки с элементами центрированы.
- При открытии страницы, в пагинации должно быть число "1", а кнопки слева неактивны.
- Заголовки с текстом, иконка и адрес email, иконка и номер телефона, и картинка собаки в самом низу центрированы в блоке `Footer`.
- Иконки локации и адреса выравнены по левому краю, а сам блок центрирован. Если локации и иконки целиком центрированы - это не ошибка, баллы не снимаем!

ставим **+2**.

### DOM & events

Максимальный балл за выполнение всех условий: **40**.

-----------------------------------

### Main Page

#### Burger menu

Если выполняются условия:
- Бургер меню будет на странице только при width < 768px.
- При нажатии на бургер меню, с правой стороны будет выезжать блок шириной 320px, в котором будут вертикально расположенные и центрированные элементы меню.
- При открытии присутствует анимация выезда (slide-in).
- В элементах действуют те же правила активности и неактивности, как и в меню на большей ширине экрана.
- Область, выступающая за 320px, затемнена.
- При открытии меню, сама иконка меню поворачивается на 90 градусов.
- При открытии меню присутствует анимация поворота иконки (rotate).
- При открытии меню возможность скролла самой страницы пропадает.
- При нажатии вне границ меню, на затемненную область, или на кнопку с иконкой бургер меню, меню заезжает обратно, а страницу снова можно скроллить.
- При закрытии присутствует анимация заезда (slide-out).
- При закрытии меню, сама иконка меню поворачивается обратно на 90 градусов.
- При закрытии меню присутствует анимация поворота иконки (rotate).
- При нажатии на "About the shelter" страница окажется в начальном положении и меню будет закрыто.

ставим **+5**.

#### Slider

Если выполняются условия:
- Присутствует анимация смены слайдов. Время анимации, тайминг функция и вид анимации значения не имеют. Главное чтобы переход не случался моментально и без анимации.

ставим **+5**.

#### Popup

Если выполняются условия:
- В слайдере активные элементы выделаяются более светлым цветом заднего фона, и реагируют на `hover`.
- При нажатии на любое место карточки (блока) с описанием конкретного питомца появляется попап, его контент без учета крестика в правом верхнем углу центрируется по ширине и высоте экрана. Остальная часть страницы затемняется.
- При появлении попапа возможность скролла самой страницы пропадает.
- При нажатии на окно (блок) попапа ничего не происходит.
- При нажатии вне границ попапа, на затемненную область, или на кнопку с крестиком, попап и затемнение исчезают, а страницу снова можно скроллить.
- При наведении мышкой на затемненную область или кнопку с крестиком, т.е. при событии `hover`, кнопка получает эффект наведения. Другими словами: кнопка интеректавная. При этом при наведении на окно (блок) самого попапа ничего не происходит.
- При 768px <= width в дизайне попапа есть картинка питомца.
- При width < 768px в дизайне попапа картинки питомца нет.

ставим **+5**.

### Pets Page

#### Burger menu

Если выполняются условия:
- Бургер меню будет на странице только при width < 768px.
- При нажатии на бургер меню, с правой стороны будет выезжать блок шириной 320px, в котором будут вертикально расположенные и центрированные элементы меню.
- При открытии присутствует анимация выезда (slide-in).
- В элементах действуют те же правила активности и неактивности, как и в меню на большей ширине экрана.
- Область, выступающая за 320px, затемнена.
- При открытии меню, сама иконка меню поворачивается на 90 градусов.
- При открытии меню присутствует анимация поворота иконки (rotate).
- При открытии меню возможность скролла самой страницы пропадает.
- При нажатии вне границ меню, на затемненную область, или на кнопку с иконкой бургер меню, меню заезжает обратно, а страницу снова можно скроллить.
- При закрытии присутствует анимация заезда (slide-out).
- При закрытии меню, сама иконка меню поворачивается обратно на 90 градусов.
- При закрытии меню присутствует анимация поворота иконки (rotate).
- При нажатии на "Our Pets" страница окажется в начальном положении и меню будет закрыто.

ставим **+5**.

#### Popup

Если выполняются условия:
- В слайдере активные элементы выделаяются более светлым цветом заднего фона, и реагируют на `hover`.
- При нажатии на любое место карточки (блока) с описанием конкретного питомца появляется попап, его контент без учета крестика в правом верхнем углу центрируется по ширине и высоте экрана. Остальная часть страницы затемняется.
- При появлении попапа возможность скролла самой страницы пропадает.
- При нажатии на окно (блок) попапа ничего не происходит.
- При нажатии вне границ попапа, на затемненную область, или на кнопку с крестиком, попап и затемнение исчезают, а страницу снова можно скроллить.
- При наведении мышкой на затемненную область или кнопку с крестиком, т.е. при событии `hover`, кнопка получает эффект наведения. Другими словами: кнопка интеректавная. При этом при наведении на окно (блок) самого попапа ничего не происходит.
- При 768px <= width в дизайне попапа есть картинка питомца.
- При width < 768px в дизайне попапа картинки питомца нет.

ставим **+5**.

#### Pagination

Если выполняются условия:
- При переключении страниц данные меняются (в нашем случае карточки питомцев меняют свой порядок). Эффекты могут быть, а могут и не быть. Отсуствие эффектов **не является ошибкой**!
- При каждой загрузке или перезагрузке `Our Pets` в браузере всегда активной является первая страница.
- Кнопка `<<` всегда открывает первую страницу
- Кнопка `<` открывает предыдущую до текущей страницы
- Кнопка `>` открывает следующую после текущей страницы
- Кнопка `>>` всегда открывает последнюю страницу
- В кружке по центру указан номер текущей страницы
- При открытии первой страницы, кнопки `<<` и `<` - неактивны.
- При открытии последней страницы, кнопки `>` и `>>` - неактивны.
- Всего для пагинации сгенерировано 48 объектов питомцев.
- При 1280px <= width на странице одновременно показаны 8 карточек питомцев, а самих страниц 6. Т.е. при нажатии `>>` открывается шестая страница. Проводим проверку с перезагрузкой страницы на новой ширине экрана.
- При 768px <= width < 1280px на странице одновременно показаны 6 карточек питомцевв, а самих страниц 8. Т.е. при нажатии `>>` открывается восьмая страница. Проводим проверку с перезагрузкой страницы на новой ширине экрана.
- При width < 768px на странице одновременно показаны 3 карточки питомцев, а самих страниц 16. Т.е. при нажатии `>>` открывается шестнадцатая страница. Проводим проверку с перезагрузкой страницы на новой ширине экрана.

ставим **+5**.

Каждая новая страница пагинации будет содержать **псевдослучайный** набор питомцев, т.е. формироваться из исходных объектов в случайном порядке, но с условиями. Если выполняются условия:
- При неизменных размерах области пагинации, в том числе размерах окна браузера, возвращаясь на страницу под определнным номером, контент на ней всегда будет одинаков. Т.е. карточки питомцев будут в том же расрположении, что и были до перехода на другие страницы.
- При загрузке `Our Pets` формируется массив из 48 объектов питомцев. Каждый из 8 приведенных на макете питомцев должен встречаться ровно 6 раз.
- При каждой загрузке набор элементов, отображенных на странице пагинации, должен формироваться случайно. Для этого делаем перезагрузку вкладки браузера 4 или более раза, и смотрим, чтобы порядок карточек питомцев в пагинации менялся.
- Каждые 8, каждые 6, и каждые 3, карточки питомцев не должны повторяться. Т.е. на одной странице пагинации не может быть одноврменно два одинаковых питомца.
- При 1280px <= width на странице одновременно показаны 8 неповторяющихся карточек питомцев.
- При 768px <= width < 1280px на странице одновременно показаны 6 неповторяющихся карточек питомцев.
- При width < 768px на странице одновременно показаны 3 неповторяющихся карточки питомцев.

ставим **+5**.

## Итого, максимальный балл за выполнение всех условий: 100

### И напутствие напоследок: если вы до конца не уверены, снижать балл, или не снижать, то не снижайте. Относитесь с уважением друг к другу.
