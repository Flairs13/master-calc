const UPDATE_VALUE = 'UPDATE_VALUE'
const SET_RESULT = 'SET_RESULT'
const UPDATE_VALUE_AMOUNT = 'UPDATE_VALUE_AMOUNT'
const DEFAULT_STATE = 'DEFAULT_STATE'
const DEFAULT_FORMS = 'DEFAULT_FORMS'
const SET_SELECT_VALUE = 'SET_SELECT_VALUE'
const SET_TOTAL = 'SET_TOTAL'
const SET_DISCOUNTS = 'SET_DISCOUNTS'
const SET_DISCOUNTED_VALUE = 'SET_DISCOUNTED_VALUE'
const SET_SUM_VALUE = 'SET_SUM_VALUE'


let initialState = {
    formOrder: {
        valueOrder: '',
        valueDate: '',
        valueFullName: '',
        valueAddress: '',
        valueConfiguration: '',
        valueDefect: '',
    },

    listWorks: [
        {
            id: 1, option: [
                {value: 'Windows 10 50', prices: 5000}, {value: 'Windows 8', prices: 4000}, {value: 'Windows 7', prices: 3000},
                {value: 'Windows XP', prices: 2000}
            ], name: 'Windows', amount: '', value: '', label: '----------Windows----------',
        },
        {
            id: 2, option: [
                {value: 'Яблоки', prices: 5000}, {value: 'Груши', prices: 4000}, {value: 'Вишня', prices: 3000},
                {value: 'Смородина', prices: 2000}
            ], name: 'Fruits', amount: '', value: '', label: '----------Яблоки----------',
        },
        {
            id: 3, option: [
                {value: 'Дуб', prices: 5000}, {value: 'Береза', prices: 4000}, {value: 'Ива', prices: 3000},
                {value: 'Елка', prices: 2000}
            ], name: 'Tree', amount: '', value: '', label: '----------Деревья----------',
        },
        {
            id: 4, option: [
                {value: 'Оперативка', prices: 5000}, {value: 'Видеокарта', prices: 4000}, {value: 'Процессор', prices: 3000},
                {value: 'Материнка', prices: 2000}
            ], name: 'Computer', amount: '', value: '', label: '----------Компутактер----------',
        },
        {
            id: 5, option: [
                {value: 'ЛесПоул', prices: 5000}, {value: 'Стратокастер', prices: 4000}, {value: 'Телекастер', prices: 3000},
                {value: 'Самопил', prices: 2000}
            ], name: 'Guitars', amount: '', value: '', label: '----------Гитары----------',
        },
        {
            id: 6, option: [
                {value: 'Сучара', prices: 5000}, {value: 'Пидор', prices: 4000}, {value: 'Хуила', prices: 3000},
                {value: 'Рукоблуд', prices: 2000}
            ], name: 'Pidors', amount: '', value: '', label: '----------Помидоры----------',
        },

    ],

    resultList: {},

    total: {
        totalValue: '',
    },
    discounts: {
        options: [
            {value: 0.1, label: 'Скидка 10%'},
            {value: 0.2, label: 'Скидка 20%'},
            {value: 0.3, label: 'Скидка 30%'},
            {value: 0.4, label: 'Скидка 40%'},
            {value: 0.5, label: 'Скидка 50%'},
        ],
        value: '',
        label: '----------Выбери скидку пожалуйста----------',
        discountedValue: '',
    }
}

const mainPageReducer = (state = initialState, action) => {
    const lw = state.listWorks.findIndex (w => w.id === action.id)


    switch (action.type) {
        case UPDATE_VALUE: {
            return {...state, formOrder: {...state.formOrder, ['value' + [action.name]]: action.value}}
        }

        case SET_RESULT: {
            return {
                ...state,
                listWorks: [
                    ...state.listWorks.slice (0, lw), {...state.listWorks[lw], label: action.label, value: action.value},
                    ...state.listWorks.slice (lw + 1),
                ]
            }

        }

        case UPDATE_VALUE_AMOUNT: {
            return {
                ...state, listWorks: [
                    ...state.listWorks.slice (0, lw), {...state.listWorks[lw], amount: action.value}, ...state.listWorks.slice (lw + 1),
                ]
            }
        }

        case SET_SELECT_VALUE: {
            return {
                ...state, selectValue: {value: action.value, label: action.label}
            }
        }

        case SET_TOTAL: {
            return {
                ...state, total: {...state.total.totalValue, totalValue: action.value}
            }
        }

        case SET_DISCOUNTS: {
            return {
                ...state, discounts: {...state.discounts, options: [...state.discounts.options], label: action.label, value: action.value}

                }
            }

        case SET_DISCOUNTED_VALUE: {
            return {
                ...state,discounts: {
                    ...state.discounts, discountedValue: action.value
                }
            }
        }


        case SET_SUM_VALUE: {
            return {
                ...state,
                listWorks: [
                    ...state.listWorks.slice (0, lw), {...state.listWorks[lw], option: [...state.listWorks[lw].option], value: action.value},
                    ...state.listWorks.slice (lw + 1),
                ]
            }

        }

        case DEFAULT_STATE: {
            return initialState
        }

        case DEFAULT_FORMS: {
            return initialState
            // return {
            //     ...state, listWorks: [
            //         ...state.listWorks.slice(0,0), {...state.listWorks[0], amount: '',}, ...state.listWorks.slice(1),
            //     ]
            // }
        }
        default:
            return state
    }
}

export const updateValue = (name, value) => ({type: UPDATE_VALUE, name, value})
export const setResult = (label, value, id) => ({type: SET_RESULT, label, value, id})
export const setAmount = (id, value) => ({type: UPDATE_VALUE_AMOUNT, id, value})
export const setSelectValue = (label,value) => ({type: SET_SELECT_VALUE, label,value})
export const setTotal = (value) => ({type: SET_TOTAL,value})
export const setDiscounts = (value, label) => ({type: SET_DISCOUNTS, value,label})
export const setDiscountedValue = (value) => ({type: SET_DISCOUNTED_VALUE, value})
export const setSumValue = (value,id) => ({type: SET_SUM_VALUE, value, id})
export const defaultState = () => ({type: DEFAULT_STATE})
export const defaultForms = () => ({type: DEFAULT_FORMS})


export default mainPageReducer