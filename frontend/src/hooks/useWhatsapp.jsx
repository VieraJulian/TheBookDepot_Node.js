export function useWhatsapp() {
    const handleWhatsAppClick = (article) => {
        const phoneNumber = '3442551775';
        let message;

        if (!Array.isArray(article)) {
            message = encodeURIComponent(`¡Hola! Estoy interesado en obtener más información sobre: ${article.title} - $${article.price}`)
        } else {
            let string = [];
            article.map(item => {
                string.push(` ${item.title} - $${item.price}`)
                
            })

            message = encodeURIComponent('¡Hola! Necesito ayuda con mi compra:' + string)
        }

        const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappLink, '_blank');

    };

    return { handleWhatsAppClick }
}