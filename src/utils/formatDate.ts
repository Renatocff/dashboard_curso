const formatDate = (data: string): string => {
    
    const dateFormatted = new Date(data);
    const dia = ("0" + (dateFormatted.getDate())).slice(-2)
    const mes = ("0" + (dateFormatted.getMonth() + 1)).slice(-2)
    const ano = dateFormatted.getFullYear();
    
    return `${dia}/${mes}/${ano} - ${dateFormatted.getHours()}:${dateFormatted.getMinutes()}`;
}

export default formatDate;