{
    //WEATHER_RU
    const temperatureRegexRu = /<div[^>]*class="[^"]*temp[^"]*fact__temp[^"]*"[^>]*>\s*<span[^>]*class="[^"]*temp__value[^"]*"[^>]*>([\+\-−]?\d+)<\/span>/i;
    const feelsLikeRegexRu = /<div class="term__value"><div class="temp" role="text"><span class="temp__value[^>]*>([\+\-−]?\d+)<\/span><\/div><\/div>/i;
    const temperatureMaxRegexRu = /forecast-briefly__temp_day[^>]*>\s*<span[^>]*>\s*днём<\/span>\s*<span[^>]*>([\+\-−]?\d+)/;
    const temperatureMinRegexRu = /forecast-briefly__temp_night[^>]*>\s*<span[^>]*>\s*ночью<\/span>\s*<span[^>]*>([\+\-−]?\d+)/;
    const wDescriptionRegexRu = /<p class="maps-widget-fact__title">([^<]+)<\/p>/;
    const conditionRegexRu = /<div class="link__condition[^>]*>(.*?)<\/div>/i;
    const windSpeedRegexRu = /<div[^>]*class="term__value"[^>]*>\s*(?:<i[^>]*><\/i>)?\s*(<span[^>]*class="wind-speed"[^>]*>(\d+[,.]\d+)<\/span>|Штиль)\s*/i;
    const windTitleRegexRu = /<abbr[^>]*title="Ветер: [^"]*"[^>]*>([А-Я]{1,2})<\/abbr>/i;
    // const windGustRegexRu = 
    // const windAngleRegexRu = 
    const humidityRegexRu = /<span class="a11y-hidden">Влажность:\s*(\d+)%/i;
    const pressureRegexRu = /<i class="icon icon_pressure[^>]*"><\/i>(\d+) <span class="fact__unit">мм рт\. ст\.<\/span>/i
    const cityRegexRu = /<h1 class="title title_level_1 header-title__title" id="main_title">([^<]+)<\/h1>/i;
    const sunriseRegexRu = /<div class="sun-card__sunrise-sunset-info sun-card__sunrise-sunset-info_value_rise-time"><span class="a11y-hidden">Восход<\/span>(\d{2}:\d{2})<\/div>/i;
    const sunsetRegexRu = /<div class="sun-card__sunrise-sunset-info sun-card__sunrise-sunset-info_value_set-time"><span class="a11y-hidden">Закат<\/span>(\d{2}:\d{2})<\/div>/i;
    const icoRegexRu = /<div[^>]*class="fact__temp-wrap[^"]*"[^>]*>.*?<img[^>]*src="[^"]*\/([^\/]+)\.svg"[^>]*>/is;
    //WEATHER_HOUR_RU
    const hourWeatherRegexRu = /<li class="fact__hour\s+swiper-slide(?:\s+swiper-slide-active|\s+swiper-slide-next)?"><div class="fact__hour-elem" aria-hidden="true"><div class="fact__hour-label">(?:[а-яё]{2},\s)?(\d{1,2}:\d{2})<\/div><img.*?src="[^"]*\/([^\/]+)\.svg".*?class="fact__hour-temp">(.*?)<\/div>/gis;
    const dataBemRegexRu = /<i class="b-statcounter__metrika b-statcounter__metrika_type_js[^"]*"[^>]*data-bem='([^']*)'/;
    //FORECAST_RU
    const forecastRegexRu = /<td[^>]*class="[^"]*climate-calendar__cell[^"]*">.*?<img[^>]*class="[^"]*climate-calendar-day__icon[^"]*"[^>]*src="[^"]*\/([^\/]+)\.svg"[^>]*>.*?<span[^>]*class="temp__value[^>]*">([\+\-−]?\d+)<\/span>.*?<span[^>]*class="temp__value[^>]*">([\+\-−]?\d+)<\/span>.*?<span[^>]*class="a11y-hidden">(\d{1,2}\s[а-яёА-ЯЁ]+,\s[а-яёА-ЯЁ]+)\.\sднём,\s([\+\-−]?\d+)°;\sночью,\s([\+\-−]?\d+)°;\s([а-яёА-ЯЁ\s]+)<\/span>/gis;
    const forecastIcoRegexRu = /<img[^>]*class="[^"]*climate-calendar-day__icon[^"]*"[^>]*src="[^"]*\/([^\/]+)\.svg"[^>]*>/i;
    const regexFeelsLikeRu = /<span[^>]*detailed-feels-like[^>]*>\s*<div[^>]*>\s*<span[^>]*temp__value[^>]*>([+-−]?\d+)<\/span>/;
    const regexHumidityRu = /<i[^>]*humidity[^>]*>.*?<\/i>\s*<\/td>\s*<td[^>]*detailed-data-table[^>]*>(\d+)%<\/td>/;
    const regexPressureRu = /<i[^>]*pressure[^>]*>.*?<\/i>\s*<\/td>\s*<td[^>]*detailed-data-table[^>]*>(\d+)\s*мм\s*рт\.\s*ст\.<\/td>/;
    const regexWindSpeedRu = /<i[^>]*wind[^>]*>.*?<\/i>\s*<\/td>\s*<td[^>]*detailed-data-table[^>]*>\s*<div[^>]*wind-speed[^>]*>([\d.]+)<\/div>\s*м\/с/;
    const regexWindTitleRu = /<abbr[^>]*>([^<]+)<\/abbr>/;

    //WEATHER_COM
    const temperatureRegexCom = /<p class="AppFactTemperature_wrap__[\w_]+".*?>.*?<span class="AppFactTemperature_sign__[\w_]+">([+-−]?)<\/span>.*?<span class="AppFactTemperature_value__[\w_]+">(\d+)<\/span>.*?[°F]<\/p>/;
    const feelsLikeRegexCom = /<span class="AppFact_feels__[\w\s]+">Feels like ([+-−]?\d+)[°F]<\/span>/;
    const temperatureMaxMinCom = /class="[^"]*AppShortForecastDay_temperature[^"]*">([\+\-−]?\d+)°.*?class="[^"]*AppShortForecastDay_temperature[^"]*">([\+\-−]?\d+)°/;
    const temperatureMaxMinCom_container = /class="[^"]*AppShortForecastDay_temperature[^"]*">([\+\-−]?\d+)/g;
    const wDescriptionRegexCom = /<p class="AppFact_warning__[\w\s-]+"[^>]*>([^<]+)<\/p>/;
    const conditionRegexCom = /<p class="AppFact_warning__[\w\s-]+"[^>]*>([^,]+),/;
    const windSpeedRegexCom = /<li[^>]*><span[^>]*><svg[^>]*>.*?<\/svg><\/span>([^,]+),/;
    const windTitleRegexCom = /<li[^>]*><span[^>]*><svg[^>]*>.*?<\/svg><\/span>(?:\d+[.,]?\d*\s*(?:m\/s|mph)|calm),\s*([A-Z]+)<\/li>/;
    const humidityRegexCom = /<li[^>]*><span[^>]*><svg[^>]*>.*?<\/svg><\/span>(\d+)%<\/li>/;
    const pressureRegexCom = /<li[^>]*><span[^>]*><svg[^>]*>.*?<\/svg><\/span>(\d+)<\/li>/;
    const cityRegexCom = /<label[^>]*class="Suggest_placeholder__[\w_]+".*?>([^<]+)<\/label>/i;
    const sunriseRegexCom = /<div[^>]*class="[^"]*AppForecastDayDuration_item__[^"]*"[^>]*>\s*<div[^>]*class="[^"]*AppForecastDayDuration_text__[^"]*"[^>]*>(\d{1,2}:\d{2}\s*[ap]m)<\/div>\s*<div[^>]*class="[^"]*AppForecastDayDuration_text__[^"]*"[^>]*>(\d{1,2}\s*hr\s*\d{1,2}\s*min)<\/div>\s*<div[^>]*class="[^"]*AppForecastDayDuration_text__[^"]*"[^>]*>(\d{1,2}:\d{2}\s*[ap]m)<\/div>/i;
    const sunsetRegexCom = /<div[^>]*class="[^"]*AppForecastDayDuration_item__[^"]*"[^>]*>\s*<div[^>]*class="[^"]*AppForecastDayDuration_text__[^"]*"[^>]*>(\d{1,2}:\d{2}\s*[ap]m)<\/div>\s*<div[^>]*class="[^"]*AppForecastDayDuration_text__[^"]*"[^>]*>(\d{1,2}\s*hr\s*\d{1,2}\s*min)<\/div>\s*<div[^>]*class="[^"]*AppForecastDayDuration_text__[^"]*"[^>]*>(\d{1,2}:\d{2}\s*[ap]m)<\/div>/i;
    const icoRegexCom = /<div class="[^"]*style_weatherIcon__[^"]* AppFact_condition__icon__[^"]*" style="--icon:(\d+)"[^>]*><\/div>/;
    const uvIndexCom = /uv index:\s*(\d+),/i;
    //FORECAST_HOUR_COM
    const hourWeatherRegexCom = /<time class="AppHourlyItem_time__[a-zA-Z0-9]+"[^>]*>(?:[A-Za-z]+,\s*)?([\d:]+(?:\s*(?:am|pm))?)<\/time>[\s\S]*?<div class="AppHourlyItem_center__[a-zA-Z0-9]+">([\s\S]*?)<\/p>/g;
    //FORECAST_COM
    const forecastRegexCom = /<td[^>]*class="[^"]*climate-calendar__cell[^"]*">.*?<img[^>]*class="[^"]*climate-calendar-day__icon[^"]*"[^>]*src="[^"]*\/([^\/]+)\.svg"[^>]*>.*?<span[^>]*class="temp__value[^>]*">([+\-−]?\d+)<\/span>.*?<span[^>]*class="temp__value[^>]*">([+\-−]?\d+)<\/span>.*?<span[^>]*class="a11y-hidden">(\d{1,2}\s[A-Za-z]+,\s[A-Za-z]+)\.\sday,\s([+-]?\d+)°;\snight,\s([+-]?\d+)°;\s([a-zA-Z\s]+)<\/span>/gis;
    const forecastIcoRegexCom = /<img[^>]*class="[^"]*climate-calendar-day__icon[^"]*"[^>]*src="[^"]*\/([^\/]+)\.svg"[^>]*>/i;
    const regexFeelsLikeCom = /<span[^>]*detailed-feels-like[^>]*>\s*<div[^>]*>\s*<span[^>]*temp__value[^>]*>([+-−]?\d+)<\/span>/;
    const regexHumidityCom = /<i[^>]*humidity[^>]*>.*?<\/i>\s*<\/td>\s*<td[^>]*detailed-data-table[^>]*>(\d+)%<\/td>/;
    const regexPressureCom = /<i[^>]*pressure[^>]*>.*?<\/i>\s*<\/td>\s*<td[^>]*detailed-data-table[^>]*>(\d+)\s*mmHg<\/td>/;
    const regexWindSpeedCom = /<i[^>]*wind[^>]*>.*?<\/i>\s*<\/td>\s*<td[^>]*detailed-data-table[^>]*>\s*<div[^>]*wind-speed[^>]*>([\d.]+)<\/div>\s*m\/s/;
    const regexWindTitleCom = /<abbr[^>]*title="[^"]+">([^<]+)<\/abbr>/;

    //CAPCHA_RU
    const capchaRegexRu = /<a\s+color="secondary"[^>]*href="https:\/\/cloud\.yandex\.com\/services\/smartcaptcha[^"]*"[^>]*>(SmartCaptcha by Yandex Cloud)<\/a>/i;
    const capchaRegexCom = /<a\s+color="secondary"[^>]*href="https:\/\/cloud\.yandex\.ru\/services\/smartcaptcha[^"]*"[^>]*>(SmartCaptcha by Yandex Cloud)<\/a>/i;

}