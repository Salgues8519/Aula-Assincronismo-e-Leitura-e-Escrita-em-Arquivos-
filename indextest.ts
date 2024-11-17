console.log('primeira etapa');

setTimeout(() => {
    const cargaBaixa = 50; 

    if (cargaBaixa <= 10) {
        console.log(`CELULAR VAI DESLIGAR, ${cargaBaixa}% de carga`);
    }else {
        console.log(`Sua carga é de ${cargaBaixa}%`);
        
    }
}, 3000);

console.log('terceira etapa');