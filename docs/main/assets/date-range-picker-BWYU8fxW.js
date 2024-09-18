import{C as T,I as g,l as d,t as V,K as C,P as D,J as f,o as v,p as b}from"./constants-DjE6emXm.js";import{c as E}from"./base-adapter-F7QHxK2H.js";import{D as y}from"./index-ByifSpfC.js";import{D as a,i as l,C as A}from"./calendar-7kNf1bkm.js";import"./index-Dh0vMUMR.js";import{B as k,C as w,D as c,d as M,a as L,b as F,c as S}from"./base-date-picker-core-CoHpRQfo.js";import{I as z,a as P}from"./icon-DHpZ4R73.js";import{I as N}from"./icon-button-XdSjYqUR.js";import{b as O,s as x}from"./focus-indicator-_fDu4ZqT.js";import"./state-layer-DTKAXCUq.js";import{P as R}from"./popover-tgjxHp7t.js";import"./overlay-DWm8nYOy.js";import{l as I}from"./text-field-Mn1kp0eu.js";import{F as B}from"./base-field-D-7Ngroz.js";const h=`${T}date-range-picker`;class p{constructor(t){t&&(this.from=t.from,this.to=t.to)}copy(){return new p(this)}}const U={FROM:"from",TO:"to",END_VALUE:"end-value"},$={INPUT:"input"},K={CHANGE:`${h}-change`,OPEN:`${h}-open`,CLOSE:`${h}-close`,INPUT:`${h}-input`},n={elementName:h,selectors:$,events:K,observedAttributes:U};class H extends k{constructor(t){super(t),this._dropdownIdentifier=`forge-date-range-picker-${this._identifier}`}_initializeInput(){if(this._fromInputElement=this._component.querySelectorAll(n.selectors.INPUT)[0],this._toInputElement=this._component.querySelectorAll(n.selectors.INPUT)[1],!this._fromInputElement||!this._fromInputElement)throw new Error(`The ${n.elementName} requires two inputs`);const t=this._createInputSeparator();this._fromInputElement.insertAdjacentElement("afterend",t)}_initializeCalendarDropdown(){const t=this._getDefaultTargetElement();this._calendarDropdown=new w(t,this._dropdownIdentifier)}initializeMask(t){var e;(e=this._fromInputMask)==null||e.destroy(),this._fromInputMask=new c(this._fromInputElement,t)}destroyMask(){var t;(t=this._fromInputMask)==null||t.destroy(),this._fromInputMask=void 0}initializeToMask(t){var e;(e=this._toInputMask)==null||e.destroy(),this._toInputMask=new c(this._toInputElement,t)}destroyToMask(){var t;(t=this._toInputMask)==null||t.destroy(),this._toInputMask=void 0}destroy(){super.destroy(),this._destroyToValueChangeListener()}_destroyToValueChangeListener(){typeof this._toValueChangeListener=="function"&&this._toValueChangeListener()}initializeAccessibility(){this._applyToInputs(t=>t.setAttribute("autocomplete","off")),this._applyToInputs(t=>t.setAttribute("autocorrect","off")),this._applyToInputs(t=>t.setAttribute("autocapitalize","off")),this._applyToInputs(t=>t.setAttribute("spellcheck","false")),this._applyToInputs(t=>t.setAttribute("role","combobox")),this._applyToInputs(t=>t.setAttribute("aria-live","assertive")),this._applyToInputs(t=>t.setAttribute("aria-atomic","true")),this._applyToInputs(t=>t.setAttribute("aria-haspopup","true")),this._applyToInputs(t=>t.setAttribute("aria-expanded","false")),this._applyToInputs(t=>t.setAttribute("aria-owns",this._dropdownIdentifier)),this._toInputElement.hasAttribute("aria-label")||this._toInputElement.setAttribute("aria-label","To date"),O(),this._applyToInputs(t=>x(t))}addInputListener(t,e,s){var i;(i=this._fromInputElement)==null||i.addEventListener(t,e,{capture:s})}addToInputListener(t,e,s){var i;(i=this._toInputElement)==null||i.addEventListener(t,e,{capture:s})}removeInputListener(t,e){var s;(s=this._fromInputElement)==null||s.removeEventListener(t,e)}removeToInputListener(t,e){var s;(s=this._toInputElement)==null||s.removeEventListener(t,e)}setInputValueChangedListener(t,e){this._valueChangeListeners.length&&this.destroyValueChangeListener();const s=I(t,this._fromInputElement,"value",e);this._valueChangeListeners.push(s)}setToInputValueChangedListener(t,e){this._destroyToValueChangeListener(),this._toValueChangeListener=I(t,this._toInputElement,"value",e)}hasInputElement(){return!!this._fromInputElement&&!!this._toInputElement}attachCalendar(t,e){super.attachCalendar(t,e),this._fromInputElement.setAttribute("aria-expanded","true")}detachCalendar(){super.detachCalendar(),this._fromInputElement&&(this._fromInputElement.setAttribute("aria-expanded","false"),this._fromInputElement.removeAttribute("aria-activedescendant"))}setActiveDescendant(t){this._fromInputElement.setAttribute("aria-activedescendant",t)}setInputValue(t,e){this._fromInputElement.value!==t&&(this._fromInputElement.value=t,this._fromInputMask&&this._fromInputMask.updateMask(),e&&(this._fromInputElement.dispatchEvent(new Event("change")),this._fromInputElement.dispatchEvent(new Event("input"))))}setToInputValue(t,e){this._toInputElement.value!==t&&(this._toInputElement.value=t,this._toInputMask&&this._toInputMask.updateMask(),e&&(this._toInputElement.dispatchEvent(new Event("change")),this._toInputElement.dispatchEvent(new Event("input"))))}isInputDisabled(){return this._fromInputElement.disabled}isInputFocused(t){if(t&&this._toInputElement===t||this._fromInputElement===t)return!0;const e=g(this._component.ownerDocument);return this._toInputElement===e||this._fromInputElement===e}getInputValue(){return this._fromInputElement.value}getToInputValue(){return this._toInputElement.value}setDisabled(t){this._fromInputElement.disabled=t,this._toInputElement.disabled=t,this._toInputElement.setAttribute("aria-disabled",t.toString()),this._fromInputElement.setAttribute("aria-disabled",t.toString()),this._toggleElement&&(this._toggleElement.setAttribute("aria-disabled",t.toString()),this._toggleElement.hasOwnProperty("disabled")&&(this._toggleElement.disabled=t,this._toggleElement.tabIndex=-1))}emitInputEvent(t,e){d(this._fromInputElement,t,e)}emitToInputEvent(t,e){d(this._toInputElement,t,e)}_createToggleElement(){return M("date_range")}tryFocusInput(){this._fromInputElement.focus()}tryBlurInput(){this._fromInputElement.blur()}selectInputText(){this._fromInputElement.select()}selectToInputText(){this._toInputElement.select()}_applyToInputs(t){[this._fromInputElement,this._toInputElement].forEach(t)}_createInputSeparator(){const t=document.createElement("span");return V(t,!0,B.attributes.MULTI_INPUT_SEPARATOR),t.setAttribute("aria-hidden","true"),t.textContent="-",t}}class j extends L{constructor(t){super(t),this._mode="range",this._from=null,this._to=null,this._toInputListener=e=>this._onToInput(e),this._toInputValueChangedListener=e=>this._onToInputValueChanged(e),this._toInputKeydownListener=e=>this._onInputKeydown(e),this._toInputFocusListener=e=>this._onToInputFocus(),this._toInputBlurListener=e=>this._onToInputBlur(e)}initialize(){super.initialize(),this._setFormattedToInputValue(!0)}_initializeState(){this._applyToMask(),this._from||(this._from=this._coerceDateValue(this._adapter.getInputValue())),this._to||(this._to=this._coerceDateValue(this._adapter.getToInputValue()))}_initializeListeners(){super._initializeListeners(),this._adapter.addToInputListener("keydown",this._toInputKeydownListener),this._adapter.addToInputListener("focus",this._toInputFocusListener),this._adapter.addToInputListener("blur",this._toInputBlurListener)}_initializeValueChangedListeners(){super._initializeValueChangedListeners(),this._adapter.setToInputValueChangedListener(this,this._toInputValueChangedListener)}_setInputChangeListeners(){super._setInputChangeListeners(),this._adapter.addToInputListener("input",this._toInputListener)}_removeInputChangeListeners(){super._removeInputChangeListeners(),this._adapter.removeToInputListener("input",this._toInputListener)}_openCalendar(t){this._formatToInputValue(),super._openCalendar(t);const e=this._getCurrentValue();e!=null&&e.to?this._adapter.goToCalendarDate(new Date(e.to)):e!=null&&e.from&&this._adapter.goToCalendarDate(new Date(e.from))}_emitChangeEvent(t,e){const s=this._getTypedValue(t&&t.from||null),i=this._getTypedValue(t&&t.to||null),r=new p({from:s,to:i});return this._adapter.emitHostEvent(n.events.CHANGE,r,!0,!e)?(this._setValue(this._coerceDateValue(t&&t.from||null)),this._setToValue(this._coerceDateValue(t&&t.to||null)),!0):!1}_emitOpenEvent(){this._adapter.emitHostEvent(n.events.OPEN,void 0,!1)}_emitCloseEvent(){this._adapter.emitHostEvent(n.events.CLOSE,void 0,!1)}_onToday(){const t=new Date,e=this._open?new a({from:this._from||t,to:this._to||void 0}):new a({from:t});this._isDateRangeAcceptable(e)&&(this.value=e,this._onDateSelected({date:t,range:e,selected:!0,type:"date"}),this._adapter.setCalendarActiveDate(t))}_onClear(){this._onDateSelected({date:null,range:new a,selected:!1,type:"date"}),this._closeCalendar(!0)}_getCurrentValue(){return this._value}_applyToMask(){this._masked?this._initializeToMask():(this._adapter.destroyToMask(),this._formatToInputValue())}_formatToInputValue(){const t=this._adapter.getToInputValue();if(t){const e=this._parseDateString(t);if(C(e)&&this._isDateValueAcceptable(e)){const s=this._formatDate(e);s&&this._adapter.setToInputValue(s,this._notifyInputValueChanges)}else this._allowInvalidDate||this._adapter.setToInputValue("",this._notifyInputValueChanges)}}_setFormattedInputValue(t){let e=this._formatDate(this._from);!e&&!this._allowInvalidDate&&(e=""),this._adapter.setInputValue(e,t?!1:this._notifyInputValueChanges)}_setFormattedToInputValue(t){let e=this._formatDate(this._to);!e&&!this._allowInvalidDate&&(e=""),this._adapter.setToInputValue(e,t?!1:this._notifyInputValueChanges)}_isDateRangeAcceptable(t){if(!(t!=null&&t.to))return!0;const e=()=>this._isDateValueAcceptable(t.from),s=()=>this._isDateValueAcceptable(t.to),i=()=>t!=null&&t.from&&(t!=null&&t.to)?t.from.getTime()<=t.to.getTime():!0;return e()&&s()&&i()}_setValue(t){this._isDateValueAcceptable(t)&&(this._from=t||null,this._value?this._value.from=this._from:this._value={from:this._from,to:this._to})}_setToValue(t){this._isDateValueAcceptable(t)&&(this._to=t||null,this._value?this._value.to=this._to:this._value={from:this._from,to:this._to})}_onDateSelected(t){const e=t.range;if(t.rangeSelectionState==="to"&&this._closeCalendar(!0),!this._emitChangeEvent(e??null))return;const s=this._formatDate(e&&e.from||null),i=this._formatDate(e&&e.to||null);this._adapter.setInputValue(s,this._notifyInputValueChanges),this._adapter.setToInputValue(i,this._notifyInputValueChanges),this._formatInputValue(),this._formatToInputValue(),this._from=e&&e.from||null,this._to=e&&e.to||null,D.isMobile||(i?this._adapter.selectToInputText():this._adapter.selectInputText())}_applyMin(){this._from&&!this._isDateValueAcceptable(this._from)&&(this._emitChangeEvent(new a({to:this._to||void 0}),!0),this._setFormattedInputValue()),this._to&&!this._isDateValueAcceptable(this._to)&&(this._emitChangeEvent(new a({from:this._from||void 0}),!0),this._setFormattedToInputValue()),super._applyMin()}_applyMax(){this._from&&!this._isDateValueAcceptable(this._from)&&(this._emitChangeEvent(new a({to:this._to||void 0}),!0),this._setFormattedInputValue()),this._to&&!this._isDateValueAcceptable(this._to)&&(this._emitChangeEvent(new a({from:this._from||void 0}),!0),this._setFormattedToInputValue()),super._applyMax()}_initializeToMask(){if(!this._masked)return;const t={showMaskFormat:this._showMaskFormat&&this._adapter.isInputFocused(),pattern:this._maskFormat,onChange:e=>this._handleToInput(e)};this._prepareMaskCallback&&(t.prepareCallback=(e,s,i,r)=>this._prepareMaskCallback.call(null,e,s,i,r)),this._adapter.initializeToMask(t)}_applyDisabledDates(){this._from&&!this._isDateValueAcceptable(this._from)&&(this._emitChangeEvent(new a({to:this._to||void 0}),!0),this._setFormattedInputValue()),this._to&&!this._isDateValueAcceptable(this._to)&&(this._emitChangeEvent(new a({from:this._from||void 0}),!0),this._setFormattedToInputValue())}_applyDisabledDaysOfWeek(){this._from&&!this._isDateValueAcceptable(this._from)&&(this._emitChangeEvent(null,!0),this._setFormattedInputValue()),this._to&&!this._isDateValueAcceptable(this._to)&&(this._emitChangeEvent(null,!0),this._setFormattedToInputValue())}_onToInput(t){this._handleInput(this._adapter.getInputValue())}_handleInput(t){const e=this._getSanitizedDateString(t),s=this._coerceDateValue(e);this._masked&&this._adapter.emitInputEvent(n.events.INPUT,e),!l(s,this._from)&&this._isDateValueAcceptable(s)&&this._emitChangeEvent(new a({from:s||void 0,to:this._to||void 0}))}_handleToInput(t){const e=this._getSanitizedDateString(t),s=this._coerceDateValue(e);this._masked&&this._adapter.emitToInputEvent(n.events.INPUT,e),!l(s,this._to)&&this._isDateValueAcceptable(s)&&this._emitChangeEvent(new a({from:this._from||void 0,to:s||void 0}))}_onToInputFocus(){this.masked&&this._showMaskFormat&&(this._initializeMask(),this._initializeToMask()),this._adapter.selectToInputText()}_onToInputBlur(t){this._masked&&!this._adapter.isInputFocused(t.relatedTarget)&&(this._initializeMask(),this._initializeToMask()),this._formatToInputValue(),this._open&&this._closeCalendar(!0)}_onInputFocus(t){this.masked&&this._showMaskFormat&&(this._initializeMask(),this._initializeToMask()),this._adapter.selectInputText()}_onInputBlur(t){this.masked&&!this._adapter.isInputFocused(t.relatedTarget)&&(this._initializeMask(),this._initializeToMask()),this._formatInputValue(),this._open&&!this._adapter.isInputFocused(t.relatedTarget)&&this._closeCalendar(!0)}_onInputValueChanged(t){if(this._masked)return;const e=this._getSanitizedDateString(t),s=this._coerceDateValue(e);l(s,this._from)||(this.from=s,this._emitChangeEvent(new a({from:s||void 0,to:this._to||void 0})))}_onToInputValueChanged(t){if(this._masked)return;const e=this._getSanitizedDateString(t),s=this._coerceDateValue(e);l(s,this._to)||(this.to=s,this._emitChangeEvent(new a({from:this._from||void 0,to:s||void 0})))}get value(){return{from:this.from,to:this.to}}set value(t){t||(t={from:null,to:null}),t.from===void 0&&(t.from=null),t.to===void 0&&(t.to=null),this.from=t.from,this.to=t.to,this._value={from:this.from,to:this.to}}get from(){const t=this._getTypedValue(this._from);return t?f(t)?new Date(t.getTime()):t:null}set from(t){this._from!==t&&(this._setValue(this._coerceDateValue(t)),this._isInitialized&&(this._setFormattedInputValue(),this._open&&this._adapter.setCalendarValue(new a({from:this._coerceDateValue(t)||void 0,to:this._coerceDateValue(this._to)||void 0}))))}get to(){const t=this._getTypedValue(this._to);return t?f(t)?new Date(t.getTime()):t:null}set to(t){this._to!==t&&(this._setToValue(this._coerceDateValue(t)),this._isInitialized&&(this._setFormattedToInputValue(),this._open&&this._adapter.setCalendarValue(new a({to:this._coerceDateValue(t)||void 0,from:this._coerceDateValue(this._from)||void 0}))))}}const q=`<template>
  <slot></slot>
</template>
`,G=":host{display:block}:host([hidden]){display:none}";var J=Object.defineProperty,W=Object.getOwnPropertyDescriptor,m=(o,t,e,s)=>{for(var i=s>1?void 0:s?W(t,e):t,r=o.length-1,u;r>=0;r--)(u=o[r])&&(i=(s?u(t,e,i):u(i))||i);return s&&i&&J(t,e,i),i};let _=class extends F{static get observedAttributes(){return[...Object.values(S.observedAttributes),n.observedAttributes.FROM,n.observedAttributes.TO]}constructor(){super(),z.define(y),b(this,q,G),this._core=new j(new H(this))}attributeChangedCallback(o,t,e){switch(o){case n.observedAttributes.FROM:this.from=e;return;case n.observedAttributes.TO:this.to=e;return}super.attributeChangedCallback(o,t,e)}};m([E()],_.prototype,"from",2);m([E()],_.prototype,"to",2);_=m([v({name:n.elementName,dependencies:[R,A,N,P]})],_);
