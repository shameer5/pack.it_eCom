export const GENERATE_TOKEN ="generateToken";
export const GET_SHIPPING_COUNTRY = "getShippingCountry"
export const GET_SHIPPING_SUBDIVISIONS = 'getShippingSubdivisions'
export const GET_SHIPPING_OPTIONS = "getShippingOptions"
export const GET_CAPTURE_ORDER = "getCaptureCheckout"

const SET_CAPTURE_ORDER = "setCaptureCheckout"
const SET_SHIPPING_OPTIONS = "setShippingOptions"
const SET_SHIPPING_COUNTRY = "setShippingCountries";
const SET_TOKEN = "setToken";
const SET_SHIPPING_SUBDIVISIONS = "setShippingSubdivisions";
const SET_ORDER = "setOder"

const SHIPPING_COUNTRY = 'shippingCountry';
const SHIPPING_SUBDIVISION = 'shippingSubdivision'
const SHIPPING_OPTION = 'shippingOption';


export const generateToken = (id) => ({
    type: GENERATE_TOKEN,
    id: id
})

export const setToken = (token) => ({
    type: SET_TOKEN,
    token: token
})

export const getShippingCountries = (id) => ({
    type: GET_SHIPPING_COUNTRY,
    id: id
})

export const setShippingCountries = (countries) => ({
    type: SET_SHIPPING_COUNTRY,
    countries: countries
})

export const getShippingSubdivisions = (countryCode) => ({
    type: GET_SHIPPING_SUBDIVISIONS,
    countryCode: countryCode
})

export const setShippingSubdivisions = (subdivisions) => ({
    type: SET_SHIPPING_SUBDIVISIONS,
    subdivisions: subdivisions
})

export const getShippingOptions = (id, country, region) => ({
    type: GET_SHIPPING_OPTIONS,
    id: id,
    country: country,
    region: region
})

export const setShippingOptions = (shippingOptions) => ({
    type: SET_SHIPPING_OPTIONS,
    options: shippingOptions
})

export const getCaptureCheckout = (id, order) => ({
    type: GET_CAPTURE_ORDER,
    id: id,
    order: order
}) 

export const setCaptureCheckout = (order) => ({
    type: SET_CAPTURE_ORDER,
    order: order
})

export const setOrder = () => ({
    type: SET_ORDER
})

export const shippingCountry = (country) => ({
    type: SHIPPING_COUNTRY,
    shippingCountry: country
})

export const shippingSubdivision = (subdivision) => ({
    type: SHIPPING_SUBDIVISION,
    shippingSubdivision: subdivision
})

export const shippingOption = (shippingOption) => ({
    type: SHIPPING_OPTION,
    shippingOption: shippingOption
})

const initialState = {
    token : null,
    countries: [],
    subdivisions: [],
    options: [],
    order: undefined,
    shippingCountry: '',
    shippingSubdivision: '',
    shippingOption: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action) => {
    switch(action.type){
        case SET_TOKEN:
            const token = action.token;
            return {...state, token: token}
        case SET_SHIPPING_COUNTRY:
            const {countries} = action.countries;
            const country = Object.entries(countries).map(([code, name]) => ({id: code, label:name}))
            return {...state, countries: country, shippingCountry: country[0].id}
        case SET_SHIPPING_SUBDIVISIONS:
            const {subdivisions} = action.subdivisions;
            const subdivision = Object.entries(subdivisions).map(([code, name]) => ({id: code, label:name}))
            return {...state, subdivisions: subdivision, shippingSubdivision: subdivision[0].id}
        case SET_SHIPPING_OPTIONS:
            const Options = action.options
            const Option = Options.map(value => ({id: value.id, label:`${value.description} - ${value.price.formatted_with_symbol}`}))
            return {...state, options: Option,  shippingOption: Option[0].id}
        case SET_CAPTURE_ORDER:
            const Order = action.order
            return{...state, order: Order}
        case SET_ORDER:
            return{...state, order: undefined}

        case SHIPPING_COUNTRY:
            const shippingCountry = action.shippingCountry
            return {...state, shippingCountry: shippingCountry}
        case SHIPPING_SUBDIVISION:
            const shippingSubdivision = action.shippingSubdivision
            return {...state, shippingSubdivision: shippingSubdivision}
        case SHIPPING_OPTION:
            const shippingOption = action.shippingOption
            return{...state, shippingOption: shippingOption}
        default:
            return state
    }
}