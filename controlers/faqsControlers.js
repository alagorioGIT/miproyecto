let faqsControlers = {
    index: function (req, res) {
        return res.send(`Hola estamos en la pagina de FAQS`);
    },
    show: function (req, res) {
        return res.send(`Estamos en el deatalle de la FAQ  ${req.params.id} `)
    },
    create: function(req,res){
        return res.send('Estams en el formulario de carga')
    }

}
module.exports = faqsControlers;