$(function() {
    $("button").click(function() {
        // Belirli bir elementi gizlemek için bir seçici kullanın
        // Örneğin, sadece p elementlerini gizlemek için $("p").hide(); gibi
        // Ancak, tüm sayfayı gizlemek istiyorsanız bu kodu kullanabilirsiniz:
        $("*").hide();
    });
});
