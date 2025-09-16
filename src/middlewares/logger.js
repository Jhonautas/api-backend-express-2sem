export const logger = (req, res, next) => {
    // Mostrar data com timezone de sao paulo
    console.log(`${req.method}  ${req.originalUrl} ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_paulo'})}`)
    next()
}