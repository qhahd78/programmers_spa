export const setPersonalInfo = async () => {
    const response = await fetch("/web/src/data/new_data.json");
    const data = await response.json();
    // 로컬 스토리지에 저장장
    if (!localStorage.getItem("personalInfo")) {
        localStorage.setItem("personalInfo", JSON.stringify(data));
    }
    return data;
}

export const setCardStatus = () => {
    if (!localStorage.getItem("cardStatus")) {
        localStorage.setItem("cardStatus", JSON.stringify([]));
    }
}
