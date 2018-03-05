webpackJsonp([0x9fe876d52e32],{294:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),d=a(n),u=l(9),r=a(u),o=l(14),c=a(o),f=l(48),m=a(f),h=l(27),s=a(h),i=l(16),E=a(i);t.default=function(){return d.default.createElement(c.default,{title:"DayPicker API"},d.default.createElement(E.default,null,"import DayPicker from 'react-day-picker'"),d.default.createElement("h2",null,"API summary"),d.default.createElement("h4",null,"Rendering months"),d.default.createElement("p",null,d.default.createElement("a",{href:"#initialMonth"},"initialMonth"),", ",d.default.createElement("a",{href:"#month"},"month"),","," ",d.default.createElement("a",{href:"#fromMonth"},"fromMonth"),", ",d.default.createElement("a",{href:"#toMonth"},"toMonth"),","," ",d.default.createElement("a",{href:"#numberOfMonths"},"numberOfMonths"),","," ",d.default.createElement("a",{href:"#pagedNavigation"},"pagedNavigation"),","," ",d.default.createElement("a",{href:"#canChangeMonth"},"canChangeMonth"),","," ",d.default.createElement("a",{href:"#reverseMonths"},"reverseMonths")),d.default.createElement("h4",null,"Day Modifiers"),d.default.createElement("p",null,d.default.createElement("a",{href:"#selectedDays"},"selectedDays"),","," ",d.default.createElement("a",{href:"#disabledDays"},"disabledDays"),","," ",d.default.createElement("a",{href:"#modifiers"},"modifiers"),","," ",d.default.createElement("a",{href:"#modifiersStyles"},"modifiersStyles")),d.default.createElement("h4",null,"Customization"),d.default.createElement("p",null,d.default.createElement("a",{href:"#fixedWeeks"},"fixedWeeks"),","," ",d.default.createElement("a",{href:"#showOutsideDays"},"showOutsideDays"),","," ",d.default.createElement("a",{href:"#enableOutsideDaysClick"},"enableOutsideDaysClick"),","," ",d.default.createElement("a",{href:"#showWeekDays"},"showWeekDays"),","," ",d.default.createElement("a",{href:"#showWeekNumbers"},"showWeekNumbers"),","," ",d.default.createElement("a",{href:"#todayButton"},"todayButton")),d.default.createElement("h4",null,"Localization"),d.default.createElement("p",null,d.default.createElement("a",{href:"#dir"},"dir"),", ",d.default.createElement("a",{href:"#firstDayOfWeek"},"firstDayOfWeek"),","," ",d.default.createElement("a",{href:"#labels"},"labels"),", ",d.default.createElement("a",{href:"#locale"},"locale"),","," ",d.default.createElement("a",{href:"#localeUtils"},"localeUtils"),", ",d.default.createElement("a",{href:"#months"},"months"),","," ",d.default.createElement("a",{href:"#weekdaysLong"},"weekdaysLong"),","," ",d.default.createElement("a",{href:"#weekdaysShort"},"weekdaysShort")),d.default.createElement("h4",null,"CSS and HTML"),d.default.createElement("p",null,d.default.createElement("a",{href:"#className"},"className"),", ",d.default.createElement("a",{href:"#classNames"},"classNames"),","," ",d.default.createElement("a",{href:"#containerProps"},"containerProps"),","," ",d.default.createElement("a",{href:"#tabIndex"},"tabIndex")),d.default.createElement("h4",null,"Elements"),d.default.createElement("p",null,d.default.createElement("a",{href:"#renderDay"},"renderDay"),", ",d.default.createElement("a",{href:"#renderWeek"},"renderWeek"),","," ",d.default.createElement("a",{href:"#weekdayElement"},"weekdayElement"),","," ",d.default.createElement("a",{href:"#navbarElement"},"navbarElement"),","," ",d.default.createElement("a",{href:"#captionElement"},"captionElement")),d.default.createElement("h4",null,"Event handlers"),d.default.createElement("p",null,d.default.createElement("a",{href:"#onBlur"},"onBlur"),", ",d.default.createElement("a",{href:"#onCaptionClick"},"onCaptionClick"),","," ",d.default.createElement("a",{href:"#onDayClick"},"onDayClick"),", ",d.default.createElement("a",{href:"#onDayFocus"},"onDayFocus"),","," ",d.default.createElement("a",{href:"#onDayKeyDown"},"onDayKeyDown"),","," ",d.default.createElement("a",{href:"#onDayMouseDown"},"onDayMouseDown"),","," ",d.default.createElement("a",{href:"#onDayMouseEnter"},"onDayMouseEnter"),","," ",d.default.createElement("a",{href:"#onDayMouseLeave"},"onDayMouseLeave"),","," ",d.default.createElement("a",{href:"#onDayMouseUp"},"onDayMouseUp"),","," ",d.default.createElement("a",{href:"#onDayTouchEnd"},"onDayTouchEnd"),","," ",d.default.createElement("a",{href:"#onDayTouchStart"},"onDayTouchStart"),","," ",d.default.createElement("a",{href:"#onFocus"},"onFocus"),", ",d.default.createElement("a",{href:"#onKeyDown"},"onKeyDown"),","," ",d.default.createElement("a",{href:"#onMonthChange"},"onMonthChange"),","," ",d.default.createElement("a",{href:"#onTodayButtonClick"},"onTodayButtonClick")),d.default.createElement("h4",null,"Public Methods"),d.default.createElement("p",null,d.default.createElement("a",{href:"#showMonth"},"showMonth"),","," ",d.default.createElement("a",{href:"#showPreviousMonth"},"showPreviousMonth"),","," ",d.default.createElement("a",{href:"#showNextMonth"},"showNextMonth"),","," ",d.default.createElement("a",{href:"#showPreviousYear"},"showPreviousYear"),","," ",d.default.createElement("a",{href:"#showNextYear"},"showNextYear")),d.default.createElement("hr",null),d.default.createElement(m.default,null,d.default.createElement("h2",{id:"components-prop"},"DayPicker Props"),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"canChangeMonth"}),"canChangeMonth ",d.default.createElement("code",null,"boolean = true")),d.default.createElement("p",null,"Enable the navigation between months."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"captionElement"}),"captionElement"," ",d.default.createElement("code",null,"React.Element | React.Component | (props) ⇒ Element")),d.default.createElement("p",null,"A React element or constructor to use as caption. This element will receive the following props:"),d.default.createElement("ul",null,d.default.createElement("li",null,d.default.createElement("code",null,"date: Date")," The currently displayed month."),d.default.createElement("li",null,d.default.createElement("code",null,"localeUtils: Object")," The"," ",d.default.createElement("a",{href:"#localeUtils"},"localeUtils")," object passed to the component."),d.default.createElement("li",null,d.default.createElement("code",null,"locale: string")," The current ",d.default.createElement("a",{href:"#locale"},"locale")," ","passed to the component."),d.default.createElement("li",null,d.default.createElement("code",null,"onClick")," The ",d.default.createElement("a",{href:"#onCaptionClick"},"onCaptionClick")," ","function, if specified.")),d.default.createElement("p",null,"The default caption is a ",d.default.createElement("code",null,"div")," with class"," ",d.default.createElement("code",null,"DayPicker-Caption"),", showing a “month year”."),d.default.createElement("p",null," ","See also"," ",d.default.createElement(r.default,{to:"/examples/elements-year-navigation"},"this example")," using this props to display an element to switch between months and years."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"className"}),"className ",d.default.createElement("code",null,"string")),d.default.createElement("p",null,"Additional CSS class names to add to the container."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"classNames"}),"classNames ",d.default.createElement("code",null,"Object")),d.default.createElement("p",null,"The CSS class names used when rendering the component."," ",d.default.createElement("a",{href:"https://github.com/gpbl/react-day-picker/blob/master/src/classNames.js"},"See defaults")," ","on Github."),d.default.createElement("p",null,"You can use this prop to adopt the custom styles imported via CSS Modules. See ",d.default.createElement(r.default,{to:"/docs/styling"},"Styling"),"."),d.default.createElement("p",null,"The object expects the following keys:"),d.default.createElement(E.default,null,"{\n  container,            // The container element\n  wrapper,              // The wrapper element, used for keyboard interaction\n  interactionDisabled,  // Added to the container when there's no interaction with the calendar\n\n  navBar,         // The navigation bar with the arrows to switch between months\n  navButtonPrev,  // Button to switch to the previous month\n  navButtonNext,  // Button to switch to the next month\n  navButtonInteractionDisabled,  // Added to the navbuttons when disabled with fromMonth/toMonth props\n\n  months,         // Container of the months table\n  month,          // The month's main table\n  caption,        // The caption element, containing the current month's name and year\n  weekdays,       // Table header displaying the weekdays names\n  weekdaysRow,    // Table row displaying the weekdays names\n  weekday,        // Cell displaying the weekday name\n  body,           // Table's body with the weeks\n  week,           // Table's row for each week\n  day,            // The single day cell\n\n  footer,         // The calendar footer (only with todayButton prop)\n  todayButton,    // The today button (only with todayButton prop)\n\n  /* default modifiers */\n  today,          // Added to the day's cell for the current day\n  selected,       // Added to the day's cell specified in the \"selectedDays\" prop\n  disabled,       // Added to the day's cell specified in the \"disabledDays\" prop\n  outside,        // Added to the day's cell outside the current month\n}"),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"containerProps"}),"containerProps ",d.default.createElement("code",null,"Object")),d.default.createElement("p",null,"Props to pass to the container ",d.default.createElement("code",null,"div")," HTML element."),d.default.createElement("p",null,d.default.createElement("code",null,"className"),", ",d.default.createElement("code",null,"role"),", ",d.default.createElement("code",null,"tabIndex"),","," ",d.default.createElement("code",null,"onKeyDown"),", ",d.default.createElement("code",null,"onFocus")," and ",d.default.createElement("code",null,"onBlur")," ","must be passed directly to the component. E.g.:"),d.default.createElement(E.default,null,"<DayPicker\n  containerProps={ { className: 'will_be_ignored' } }\n  className=\"will_work\"\n/> "),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"disabledDays"}),"disabledDays ",d.default.createElement("code",null,"Date | Object | Date[] | (day: Date) ⇒ boolean")),d.default.createElement("p",null,"Day(s) that should appear as disabled. Set a ",d.default.createElement("code",null,"disabled")," ","modifier. See ",d.default.createElement(r.default,{to:"/docs/matching-days"},"Matching days")," for a reference of the accepted value types."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"enableOutsideDaysClick"}),"enableOutsideDaysClick ",d.default.createElement("code",null,"boolean = true")),d.default.createElement("p",null,"When"," ",d.default.createElement("a",{href:"#showOutsideDays"},d.default.createElement("code",null,"showOutsideDays"))," ","is enabled, enable click events for outside days."," "),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"firstDayOfWeek"}),"firstDayOfWeek ",d.default.createElement("code",null,"number = 0 (Sunday)")),d.default.createElement("p",null,"The day to use as first day of the week, starting from ",d.default.createElement("code",null,"0")," ","(Sunday) to ",d.default.createElement("code",null,"6")," (Saturday)."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"fixedWeeks"}),"fixedWeeks ",d.default.createElement("code",null,"boolean = false")),d.default.createElement("p",null,"Display 6 weeks per months, regardless the month’s number of weeks. Outside days will be always shown if setting this to ",d.default.createElement("code",null,"true"),"."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"fromMonth"}),"fromMonth ",d.default.createElement("code",null,"Date")),d.default.createElement("p",null,"The first allowed month. Users won’t be able to navigate or interact with the days before it. See also"," ",d.default.createElement("a",{href:"#toMonth"},d.default.createElement("code",null,"toMonth")),"."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"initialMonth"}),"initialMonth ",d.default.createElement("code",null,"Date = new Date() (current month)")),d.default.createElement("p",null,"The month to display in the calendar at first render. This differs from the"," ",d.default.createElement("a",{href:"#month"},d.default.createElement("code",null,"month"))," ","prop, as it won’t re-render the calendar if its value changes."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"labels"}),"labels"," ",d.default.createElement("code",null,"Object ="," ",'{ nextMonth: "Next Month", previousMonth: "Previous Month" }')),d.default.createElement("p",null,"Labels to use as ",d.default.createElement("code",null,"aria-label")," HTML attributes."),d.default.createElement("p",null,"The object expects the following keys (as strings):"),d.default.createElement(E.default,null,"{\n  previousMonth,  // Used for the button to navigate the previous month\n  nextMonth,      // Used for the button to navigate the next month\n}"),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"locale"}),"locale ",d.default.createElement("code",null,'string = "en"')),d.default.createElement("p",null,"The calendar’s locale. See"," ",d.default.createElement(r.default,{to:"/docs/localization"},"Localization"),"."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"localeUtils"}),"localeUtils"," ",d.default.createElement("code",null,"Object = ",d.default.createElement(r.default,{to:"/api/LocaleUtils"},"LocaleUtils"))),d.default.createElement("p",null,"Object of functions to format dates and to get the first day of the week. You can pass your own object for advanced localization. See"," ",d.default.createElement(r.default,{to:"/docs/localization"},"Localization"),"."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"modifiers"}),"modifiers ",d.default.createElement("code",null,"Object")),d.default.createElement("p",null,"An object of ",d.default.createElement("i",null,"day modifiers"),". See"," ",d.default.createElement(r.default,{to:"/docs/matching-days"},"matching days"),"."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"modifiersStyles"}),"modifiersStyles ",d.default.createElement("code",null,"Object")),d.default.createElement("p",null,"An object of inline styles added to the day cells when a"," ",d.default.createElement("a",{href:"#modifiers"},"modifier")," is matched. Use this prop to style day cells inline instead of using CSS classes. See"," ",d.default.createElement(r.default,{to:"/docs/styling"},"Styling"),"."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"month"}),"month ",d.default.createElement("code",null,"Date")),d.default.createElement("p",null,"The month to display in the calendar. This differs from the"," ",d.default.createElement("a",{href:"#initialMonth"},d.default.createElement("code",null,"initialMonth"))," ","prop, as it causes the calendar to re-render when its value changes."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"months"}),"months ",d.default.createElement("code",null,"string[]")),d.default.createElement("p",null,"An array containing the long month names to use in the month’s header. Default to the English months names."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"navbarElement"}),"navbarElement"," ",d.default.createElement("code",null,"React.Element | React.Component | (props) ⇒ React.Element")),d.default.createElement("p",null,"A React Element or React Component to render the navigation bar. It will receive the following props:"),d.default.createElement("ul",null,d.default.createElement("li",null,d.default.createElement("code",null,"month: Date")," The currently displayed month"),d.default.createElement("li",null,d.default.createElement("code",null,"previousMonth: Date")),d.default.createElement("li",null,d.default.createElement("code",null,"nextMonth: Date")),d.default.createElement("li",null,d.default.createElement("code",null,"onPreviousClick: () ⇒ void")),d.default.createElement("li",null,d.default.createElement("code",null,"onNextClick: () ⇒ void"))),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"numberOfMonths"}),"numberOfMonths ",d.default.createElement("code",null,"number = 1")),d.default.createElement("p",null,"The number of months to render."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"pagedNavigation"}),"pagedNavigation ",d.default.createElement("code",null,"boolean = false")),d.default.createElement("p",null,"When displaying multiple months, navigation will be paginated displaying the"," ",d.default.createElement("a",{href:"#numberOfMonths"},d.default.createElement("code",null,"numberOfMonths"))," ","at time instead of one."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"renderDay"}),"renderDay ",d.default.createElement("code",null,"(day: Date, modifiers: Object) ⇒ React.Element")),d.default.createElement("p",null,"Returns the content of a day cell. As default it returns"," ",d.default.createElement("code",null,"day"),"’s current date."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"renderWeek"}),"renderWeek"," ",d.default.createElement("code",null,"(weekNumber: number, week: Array) ⇒ React.Element")),d.default.createElement("p",null,"Returns the content of the week element when"," ",d.default.createElement("a",{href:"#showWeekNumbers"},d.default.createElement("code",null,"showWeekNumbers"))," ","is set. As default it returns the week number."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"reverseMonths"}),"reverseMonths ",d.default.createElement("code",null,"boolean = false")),d.default.createElement("p",null,"Render the months in reversed order. Useful when"," ",d.default.createElement("a",{href:"#numberOfMonths"},d.default.createElement("code",null,"numberOfMonths"))," ","is greater than ",d.default.createElement("code",null,"1"),", to display the most recent month first."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"selectedDays"}),"selectedDays ",d.default.createElement("code",null,"Date | Object | Date[] | (day: Date) ⇒ boolean")),d.default.createElement("p",null,"Day(s) that should appear as selected. Set a ",d.default.createElement("code",null,"selected")," ","modifier. See ",d.default.createElement(r.default,{to:"/docs/matching-days"},"Matching days")," for a reference of the accepted value types."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"showOutsideDays"}),"showOutsideDays ",d.default.createElement("code",null,"boolean = false")),d.default.createElement("p",null,"Display the days falling outside the current month."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"showWeekDays"}),"showWeekDays ",d.default.createElement("code",null,"boolean = true")),d.default.createElement("p",null,"Display the weekday names in the calendar header."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"showWeekNumbers"}),"showWeekNumbers ",d.default.createElement("code",null,"boolean = false")),d.default.createElement("p",null,"Display the year’s week number next to each week (",d.default.createElement(r.default,{to:"/examples/customization-week-numbers"},"example"),")."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"todayButton"}),"todayButton ",d.default.createElement("code",null,"string")),d.default.createElement("p",null,"Display a button to switch to the current month using the provided string as label."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"toMonth"}),"toMonth ",d.default.createElement("code",null,"Date")),d.default.createElement("p",null,"The last allowed month. Users won’t be able to navigate or interact with the days after it. See also"," ",d.default.createElement("a",{href:"#fromMonth"},d.default.createElement("code",null,"fromMonth")),"."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"weekdayElement"}),"weekdayElement"," ",d.default.createElement("code",null,"React.Element | React.Component | (props) ⇒ React.Element")),d.default.createElement("p",null,"A React Element or React Component to render the weekday cells in the header. It will receive the following props:"),d.default.createElement("ul",null,d.default.createElement("li",null,"weekday ",d.default.createElement("code",null,"number")),d.default.createElement("li",null,"className ",d.default.createElement("code",null,"string")),d.default.createElement("li",null,"localeUtils ",d.default.createElement("code",null,"Object")),d.default.createElement("li",null,"locale ",d.default.createElement("code",null,"string"))),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"weekdaysLong"}),"weekdaysLong ",d.default.createElement("code",null,"string[]")),d.default.createElement("p",null,"An array containing the long weekdays names to use in the month’s header. Defaults to the English weekdays names. Must start from Sunday."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"weekdaysShort"}),"weekdaysShort ",d.default.createElement("code",null,"string[]")),d.default.createElement("p",null,"An array containing the short weekdays names to use in the month’s header. Defaults to the English weekdays names. Must start from Sunday."),d.default.createElement("hr",null),d.default.createElement("h2",{id:"event-handlers"},"Event handlers"),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onCaptionClick"}),"onCaptionClick"," ",d.default.createElement("code",null,"(currentMonth: date, e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event handler when the user clicks on the caption in the header displaying the month."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onDayClick"}),"onDayClick"," ",d.default.createElement("code",null,"(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event handler when the user clicks on a day cell."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onBlur"}),"onBlur ",d.default.createElement("code",null,"(e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event handler when the calendar get the ",d.default.createElement("code",null,"blur")," event."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onDayFocus"}),"onDayFocus"," ",d.default.createElement("code",null,"(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event handler when the day cell gets the ",d.default.createElement("code",null,"focus")," event."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onDayKeyDown"}),"onDayKeyDown"," ",d.default.createElement("code",null,"(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event handler when the day cell gets the ",d.default.createElement("code",null,"keydown")," event."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onDayMouseDown"}),"onDayMouseDown"," ",d.default.createElement("code",null,"(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event handler when the mouse button is pressed on a day cell."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onDayMouseEnter"}),"onDayMouseEnter"," ",d.default.createElement("code",null,"(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event handler when the mouse enters a day cell."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onDayMouseLeave"}),"onDayMouseLeave"," ",d.default.createElement("code",null,"(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event handler when the mouse leave a day cell."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onDayMouseUp"}),"onDayMouseUp"," ",d.default.createElement("code",null,"(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event handler when the mouse button is released on a day cell."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onDayTouchStart"}),"onDayTouchStart"," ",d.default.createElement("code",null,"(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event handler when the day cell gets the ",d.default.createElement("code",null,"touchStart")," event."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onDayTouchEnd"}),"onDayTouchEnd"," ",d.default.createElement("code",null,"(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event handler when the day cell gets the ",d.default.createElement("code",null,"touchEnd")," event."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onFocus"}),"onFocus ",d.default.createElement("code",null,"(e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event handler when the calendar get the ",d.default.createElement("code",null,"focus")," event"),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onKeyDown"}),"onKeyDown ",d.default.createElement("code",null,"(e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event handler when the calendar get the ",d.default.createElement("code",null,"keydown")," event"),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onMonthChange"}),"onMonthChange ",d.default.createElement("code",null,"(month: date) ⇒ void")),d.default.createElement("p",null,"Event handler when the month is changed, i.e. clicking the navigation buttons or using the keyboard."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onWeekClick"}),"onWeekClick"," ",d.default.createElement("code",null,"(weekNumber: number, days: date[], e: SyntheticEvent) ⇒ void")),d.default.createElement("p",null,"Event hander when the user clicks on a week number (when"," ",d.default.createElement("a",{href:"#showWeekNumbers"},"showWeekNumbers")," is set to"," ",d.default.createElement("code",null,"true"),")."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"onTodayButtonClick"}),"onTodayButtonClick"," ",d.default.createElement("code",null,"(day: Date, modifiers: string[], e: SyntheticEvent) ⇒ undefined")),d.default.createElement("p",null,"Event hander when the user clicks on the today button (when"," ",d.default.createElement("a",{href:"#todayButton"},"todayButton")," is set)."),d.default.createElement("hr",null),d.default.createElement("h2",{id:"components-methods"},"Public Methods"),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"showMonth"}),"showMonth ",d.default.createElement("code",null,"(month: date) ⇒ void")),d.default.createElement("p",null,"Show the given ",d.default.createElement("code",null,"month")," in the calendar."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"showPreviousMonth"}),"showPreviousMonth ",d.default.createElement("code",null,"() ⇒ void")),d.default.createElement("p",null,"Show the previous month in the calendar."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"showNextMonth"}),"showNextMonth ",d.default.createElement("code",null,"() ⇒ void")),d.default.createElement("p",null,"Show the next month in the calendar."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"showPreviousYear"}),"showPreviousYear ",d.default.createElement("code",null,"() ⇒ void")),d.default.createElement("p",null,"Show the previous year in the calendar."),d.default.createElement("h3",null,d.default.createElement(s.default,{id:"showNextYear"}),"showNextYear ",d.default.createElement("code",null,"() ⇒ void")),d.default.createElement("p",null,"Show the next year in the calendar.")))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-api-day-picker-js-c49e555e9103e8ccd512.js.map