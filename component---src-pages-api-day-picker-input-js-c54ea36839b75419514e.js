webpackJsonp([0xc770d3d50527],{295:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),u=a(n),r=l(9),d=a(r),c=l(27),o=a(c),f=l(16),m=a(f),i=l(14),s=a(i),p=l(48),h=a(p);t.default=function(){return u.default.createElement(s.default,{title:"DayPickerInput API"},u.default.createElement(m.default,null,"import DayPickerInput from 'react-day-picker/DayPickerInput'"),u.default.createElement("h2",null,"API summary"),u.default.createElement("h4",null,"Component’s Props"),u.default.createElement("p",null,u.default.createElement("a",{href:"#classNames"},"classNames"),","," ",u.default.createElement("a",{href:"#clickUnselectsDay"},"clickUnselectsDay"),","," ",u.default.createElement("a",{href:"#component"},"component"),","," ",u.default.createElement("a",{href:"#dayPickerProps"},"dayPickerProps"),", ",u.default.createElement("a",{href:"#format"},"format"),","," ",u.default.createElement("a",{href:"#formatDate"},"formatDate"),", ",u.default.createElement("a",{href:"#keepFocus"},"keepFocus"),","," ",u.default.createElement("a",{href:"#hideOnDayClick"},"hideOnDayClick"),","," ",u.default.createElement("a",{href:"#inputProps"},"inputProps"),","," ",u.default.createElement("a",{href:"#overlayComponent"},"overlayComponent"),","," ",u.default.createElement("a",{href:"#parseDate"},"parseDate"),", ",u.default.createElement("a",{href:"#placeholder"},"placeholder"),","," ",u.default.createElement("a",{href:"#showOverlay"},"showOverlay"),", ",u.default.createElement("a",{href:"#value"},"value")),u.default.createElement("h4",null,"Event handlers"),u.default.createElement("p",null,u.default.createElement("a",{href:"#onDayChange"},"onDayChange")),u.default.createElement("h4",null,"Public methods"),u.default.createElement("p",null,u.default.createElement("a",{href:"#getDayPicker"},"getDayPicker"),", ",u.default.createElement("a",{href:"#getInput"},"getInput"),","," ",u.default.createElement("a",{href:"#hideDayPicker"},"hideDayPicker"),","," ",u.default.createElement("a",{href:"#showDayPicker"},"showDayPicker")),u.default.createElement("hr",null),u.default.createElement(h.default,null,u.default.createElement("h2",null,"DayPickerInput Props"),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"classNames"}),"classNames ",u.default.createElement("code",null,"Object")),u.default.createElement("p",null,"Customize the CSS class names used when rendering the component."),u.default.createElement("p",null,"The object expects the following keys:"),u.default.createElement(m.default,null,"{\n  container,            // The container element\n  overlayWrapper,       // The overlay's wrapper\n  overlay,              // The overlay's container\n}"),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"clickUnselectsDay"}),"clickUnselectsDay ",u.default.createElement("code",null,"boolean = false")),u.default.createElement("p",null,"Unselect and clear the input when clicking on a previously selected day."),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"component"}),"component ",u.default.createElement("code",null,'string | React.Component = "input"')),u.default.createElement("p",null,"The component class to render the input field."),u.default.createElement("p",null,"The component must be compatible with the standard HTML"," ",u.default.createElement("code",null,"input"),": i.e. it should support the",u.default.createElement("code",null,"onChange"),", ",u.default.createElement("code",null,"onFocus"),", ",u.default.createElement("code",null,"onKeyUp"),","," ",u.default.createElement("code",null,"onClick")," and ",u.default.createElement("code",null,"onBlur")," and the ",u.default.createElement("code",null,"focus")," ","props."),u.default.createElement("p",null,"If your custom component doesn’t support such props, wrap it in a component contaning them. For example:"),u.default.createElement(m.default,null,"import React from 'react';\nimport { DayPickerInput } from 'react-day-picker';\nimport MyInputWithoutFocus from './MyInputWithoutFocus';\n\nclass MyInputWithFocus extends React.Component {\n  focus = () => {\n    this.input.focus();\n  }\n  render() {\n    return (\n      <MyInputWithoutFocus \n        ref={el => (this.input = el)} \n        {...this.props} \n      />\n    );\n  }\n}\n\nfunction MyDayPickerInput(props) {\n  return <DayPickerInput component={MyInputWithFocus} />\n} \n"),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"dayPickerProps"}),"dayPickerProps ",u.default.createElement("code",null,"Object")),u.default.createElement("p",null,"The ",u.default.createElement(d.default,{to:"/api/DayPicker"},"DayPicker props")," to customize the calendar rendered in the overlay."),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"format"}),"format ",u.default.createElement("code",null,"string | string[]")),u.default.createElement("p",null,"The format string(s) used for formatting and parsing dates. It works with"," ",u.default.createElement("a",{href:"#parseDate"},u.default.createElement("code",null,"parseDate"))," ","and"," ",u.default.createElement("a",{href:"#formatDate"},u.default.createElement("code",null,"formatDate"))),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"formatDate"}),"formatDate"," ",u.default.createElement("code",null,"(date: Date?, format: string? | string[]?, locale: string?) ⇒ string")),u.default.createElement("p",null,"Date formatter used for displaying the selected date as value of the input field. As default, it returns dates formatted as"," ",u.default.createElement("code",null,"YYYY-M-D"),".",u.default.createElement("br",null),"Arguments: ",u.default.createElement("code",null,"format")," is the value coming from the"," ",u.default.createElement("a",{href:"#format"},u.default.createElement("code",null,"format"))," ","prop, while ",u.default.createElement("code",null,"locale")," is from"," ",u.default.createElement("a",{href:"#dayPickerProps"},u.default.createElement("code",null,"dayPickerProps")),".",u.default.createElement("br",null),"See also"," ",u.default.createElement("a",{href:"#parseDate"},u.default.createElement("code",null,"parseDate")),"."),u.default.createElement("p",null,"If you are using ",u.default.createElement("a",{href:"http://momentjs.com/"},"moment.js")," in your app, we already provide this function as addon: see"," ",u.default.createElement(d.default,{to:"/examples/input-moment"},"this example"),"."),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"hideOnDayClick"}),"hideOnDayClick ",u.default.createElement("code",null,"boolean = true")),u.default.createElement("p",null,"Hide the overlay when the user clicks on a day cell."),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"inputProps"}),"inputProps ",u.default.createElement("code",null,"Object")),u.default.createElement("p",null,"Additional props to add to the ",u.default.createElement("code",null,"input")," component. The"," ",u.default.createElement("code",null,"value")," key is ignored: use the"," ",u.default.createElement("a",{href:"#value"},u.default.createElement("code",null,"value"))," ","prop instead."),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"keepFocus"}),"keepFocus ",u.default.createElement("code",null,"boolean = true")),u.default.createElement("p",null,"Keep focus on the input field after switching the focus into the overlay. You may want to disable the focus on the input field when using an an",u.default.createElement("a",{href:"#overlayComponent"},"overlayComponent"),"."),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"overlayComponent"}),"overlayComponent ",u.default.createElement("code",null,"React.Component")),u.default.createElement("p",null,"A React element or constructor to use as overlay. The element will receive the following props:"),u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("code",null,"selectedDay: ?Date")," The currently selected day"),u.default.createElement("li",null,u.default.createElement("code",null,"month: Date")," The month displayed in the calendar"),u.default.createElement("li",null,u.default.createElement("code",null,"input: DOM Element")," The input field")),u.default.createElement("p",null,"See also ",u.default.createElement(d.default,{to:"/examples/input-custom-overlay"},"this example"),"."),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"parseDate"}),"parseDate"," ",u.default.createElement("code",null,"(str: string?, format: string? | string[]?, locale: string?) ⇒ Date | void")),u.default.createElement("p",null,"Date parser used for parsing the string typed in the input field. As default, it parses only dates formatted as ",u.default.createElement("code",null,"YYYY-M-D"),".",u.default.createElement("br",null),"Arguments: ",u.default.createElement("code",null,"format")," is the value coming from the"," ",u.default.createElement("a",{href:"#format"},u.default.createElement("code",null,"format"))," ","prop, while ",u.default.createElement("code",null,"locale")," is from"," ",u.default.createElement("a",{href:"#dayPickerProps"},u.default.createElement("code",null,"dayPickerProps")),".",u.default.createElement("br",null),"See also"," ",u.default.createElement("a",{href:"#formatDate"},u.default.createElement("code",null,"formatDate")),"."),u.default.createElement("p",null,"If you are using ",u.default.createElement("a",{href:"http://momentjs.com/"},"moment.js")," in your app, we already provide this function as addon: see"," ",u.default.createElement(d.default,{to:"/examples/input-moment"},"this example"),"."),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"placeholder"}),"placeholder ",u.default.createElement("code",null,"string")),u.default.createElement("p",null,"The placeholder to use for the ",u.default.createElement("code",null,"input")," field."),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"showOverlay"}),"showOverlay ",u.default.createElement("code",null,"boolean = false")),u.default.createElement("p",null,"Show the overlay during the initial rendering of the component. This is useful if you want to keep the overlay visibile while styling it."),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"value"}),"value ",u.default.createElement("code",null,"string | Date")),u.default.createElement("p",null,"The value of the ",u.default.createElement("code",null,"input")," field."),u.default.createElement("hr",null),u.default.createElement("h2",null,"Event handlers"),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"onDayChange"}),"onDayChange ",u.default.createElement("code",null,"(day: Date, modifiers: Object) ⇒ void")),u.default.createElement("p",null,"Handler function called when the user types a valid day (according to the ",u.default.createElement("code",null,"format")," prop) or when a day is clicked on the calendar. If the day is not valid, day and modifiers arguments will be"," ",u.default.createElement("code",null,"undefined")," (useful to display validation warnings)."),u.default.createElement("hr",null),u.default.createElement("h2",null,"Public methods"),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"getDayPicker"}),"getDayPicker ",u.default.createElement("code",null,"() ⇒ DayPicker")),u.default.createElement("p",null,"Return the DayPicker instance."),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"getInput"}),"getInput ",u.default.createElement("code",null,"() ⇒ DOMNode | ReactNode")),u.default.createElement("p",null,"Return the input element instance."),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"showDayPicker"}),"showDayPicker ",u.default.createElement("code",null,"() ⇒ void")),u.default.createElement("p",null,"Show the Day Picker overlay."),u.default.createElement("h3",null,u.default.createElement(o.default,{id:"hideDayPicker"}),"hideDayPicker ",u.default.createElement("code",null,"() ⇒ void")),u.default.createElement("p",null,"Hide the Day Picker overlay.")))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-api-day-picker-input-js-c54ea36839b75419514e.js.map