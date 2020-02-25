/**Convert float value to string*/
export const convertPrice = (value = 0, currency = "BRL", locale = "pt-BR") => {
	return value.toLocaleString(locale, { style: "currency", currency: currency });
}