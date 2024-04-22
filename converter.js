const RATES= {
    rub: 13.22,
    cny: 0.076
};

function convert (rub, currency)
{
    if(!RATES[currency])
    {
        return null;
    }
    return rub * RATES[currency];
}