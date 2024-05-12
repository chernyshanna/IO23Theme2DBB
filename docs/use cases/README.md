# Модель прецедентів

## Гість

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    actor "Гість" as Guest

    usecase "<b>Search<b> \n Пошук інформації" as SRCH
	usecase "<b>Download<b> \n Завантаження даних з системи" as DWNLD
    usecase "<b>SignIn<b> \n Вхід в акаунт користувача" as SI	
    usecase "<b>SignUp<b> \n Реєстрація в системі" as SU

    Guest -u-> SRCH
    Guest -u-> DWNLD
    Guest -u-> SI
	Guest -u-> SU

@enduml

</center>

