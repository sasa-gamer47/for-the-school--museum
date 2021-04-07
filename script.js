const nextImageButton = document.getElementById('next-image')
const previousImageButton = document.getElementById('previous-image')

const firstImage = document.getElementById('first-image')
const secondImage = document.getElementById('second-image')
const thirdImage = document.getElementById('third-image')
const fourthImage = document.getElementById('fourth-image')
const fifthImage = document.getElementById('fifth-image')

nextImageButton.addEventListener('click', () => {
    if (firstImage.classList.contains('hide') == false) {
        secondImage.classList.remove('hide')
        firstImage.classList.add('hide')
    } else if (secondImage.classList.contains('hide') == false) {
        thirdImage.classList.remove('hide')
        secondImage.classList.add('hide')
    } else if (thirdImage.classList.contains('hide') == false) {
        fourthImage.classList.remove('hide')
        thirdImage.classList.add('hide')
    } else if (fourthImage.classList.contains('hide') == false) {
        fifthImage.classList.remove('hide')
        fourthImage.classList.add('hide')
    } else {
        firstImage.classList.remove('hide')
        fifthImage.classList.add('hide')
    }
})



function filter(){
    
    var filterValue, input, ul,li,a,i;
     input = document?.getElementById("search");
     filterValue = input?.value?.toUpperCase();
    ul = document?.getElementById("Menu");
     li = ul?.getElementsByTagName("li");
        
        for (i = 0 ; i < li?.length ; i++){
            a = li[i]?.getElementsByTagName("p")[0];
            if(a?.innerHTML?.toUpperCase()?.indexOf(filterValue) > -1){
                li[i].style.display = "";
                
            }else{
                li[i].style.display = "none";
            }
        }
    }


    // opere

    const nikeDiSamotracia = document.getElementById('nike-di-samotracia')
    const nikeDiSamotraciaDescription = document.getElementById('nike-di-samotracia-description')

    nikeDiSamotracia?.addEventListener('click', () => {
        nikeDiSamotracia?.classList?.add('hide')
        nikeDiSamotraciaDescription?.classList?.remove('hide')
    })

    const gioconda = document?.getElementById('gioconda')
    const giocondaDescription = document?.getElementById('gioconda-description')

    gioconda?.addEventListener('click', () => {
        gioconda?.classList?.add('hide')
        giocondaDescription?.classList?.remove('hide')
    })

    const laLibertàCheGuidaIlPopolo = document?.getElementById('la-libertà-che-guida-il-popolo')
    const laLibertàCheGuidaIlPopoloDescription = document?.getElementById('la-libertà-che-guida-il-popolo-description')

    laLibertàCheGuidaIlPopolo?.addEventListener('click', () => {
        laLibertàCheGuidaIlPopolo?.classList?.add('hide')
        laLibertàCheGuidaIlPopoloDescription?.classList?.remove('hide')
    })

    const laZatteraDellaMedusa = document?.getElementById('la-zattera-della-medusa')
    const laZatteraDellaMedusaDescription = document?.getElementById('la-zattera-della-medusa-description')

    laZatteraDellaMedusa?.addEventListener('click', () => {
        laZatteraDellaMedusa?.classList?.add('hide')
        laZatteraDellaMedusaDescription?.classList?.remove('hide')
    })

    const amoreEPsiche = document?.getElementById('amore-e-psiche')
    const amoreEPsicheDescription = document?.getElementById('amore-e-psiche-description')

    amoreEPsiche?.addEventListener('click', () => {
        amoreEPsiche?.classList?.add('hide')
        amoreEPsicheDescription?.classList?.remove('hide')
    })

    const nozzeDiCana = document?.getElementById('nozze-di-cana')
    const nozzeDiCanaDescription = document?.getElementById('nozze-di-cana-description')

    nozzeDiCana?.addEventListener('click', () => {
        nozzeDiCana?.classList?.add('hide')
        nozzeDiCanaDescription?.classList?.remove('hide')
    })

    const footer = document.querySelector('footer')

    const opera1 = document.getElementById('opera1')
    const pageContent = document.getElementById('page-content')

opera1?.addEventListener('click', () => {
    pageContent.classList.add('hide')
    const textContent = document.createElement('div')
    textContent.classList.add('text-content')
    const p = document.createElement('p')
    p.innerHTML = "<b>Dettagli opera</b>: La Nike di Samotracia venne probabilmente scolpita a Rodi in epoca ellenistica per commemorare la vittoria nella battaglia dell'Eurimedonte, in cui la flotta del re siriano Antioco III (guidata da Annibale) combatté contro una piccola flotta di navi di Rodi, che da poco si era schierata dalla parte di Roma nell'ambito della Guerra romano-siriaca.  <br><br><b>Dettagli autore</b>: sconosciuto"

    const closeButton = document.createElement('button')
    closeButton.classList.add('close-button')
    closeButton.innerHTML = 'chiudi approfondimento'
    footer.style.marginTop = '1800px'

    document.body.appendChild(textContent)
    textContent.appendChild(p)
    textContent.appendChild(closeButton)

    closeButton?.addEventListener('click', () => {
        document.body.removeChild(textContent)
        pageContent.classList.remove('hide')
        footer.style.marginTop = '300px'
    })
})

const opera2 = document.getElementById('opera2')

opera2?.addEventListener('click', () => {
    pageContent.classList.add('hide')
    const textContent = document.createElement('div')
    textContent.classList.add('text-content')
    const p = document.createElement('p')
    p.style.fontSize = '21px'
    p.innerHTML = "<b>Dettagli opera</b>: La Gioconda, nota anche come Monna Lisa, è un dipinto a olio su tavola di legno di pioppo realizzato da Leonardo da Vinci, (77×53 cm e 13 mm di spessore), riconducibile al 1503-1504 circa e conservato nel Museo del Louvre di Parigi. <br><br>Opera iconica ed enigmatica della pittura mondiale, si tratta sicuramente del ritratto più celebre della storia nonché di una delle opere d'arte più note in assoluto.<br><br><b>Dettagli autore</b>: Leonardo di ser Piero da Vinci (Anchiano, 15 aprile 1452 – Amboise, 2 maggio 1519) è stato uno scienziato, inventore e artista italiano. <br>Uomo d'ingegno e talento universale del Rinascimento, considerato uno dei più grandi geni dell'umanità, incarnò in pieno lo spirito della sua epoca, portandolo alle maggiori forme di espressione nei più disparati campi dell'arte e della conoscenza: fu infatti scienziato, filosofo, architetto, pittore, scultore, disegnatore, trattatista, scenografo, matematico, anatomista, botanico, musicista, ingegnere e progettista."

    const closeButton = document.createElement('button')
    closeButton.classList.add('close-button')
    closeButton.innerHTML = 'chiudi approfondimento'

    document.body.appendChild(textContent)
    textContent.appendChild(p)
    textContent.appendChild(closeButton)
    footer.style.marginTop = '1800px'

    closeButton?.addEventListener('click', () => {
        document.body.removeChild(textContent)
        pageContent.classList.remove('hide')
        footer.style.marginTop = '300px'
    })
})

const opera3 = document.getElementById('opera3')

opera3?.addEventListener('click', () => {
    pageContent.classList.add('hide')
    const textContent = document.createElement('div')
    textContent.classList.add('text-content')
    const p = document.createElement('p')
    p.style.fontSize = '21px'
    p.innerHTML = "<b>Dettagli opera</b>: Nel 1829 il re di Francia Carlo X di Borbone , successore di Luigi XVIII, convocò al potere Jules de Polignac, capo della Congregazione, cui affidò la guida di un governo clerical-reazionario. Questo nuovo governo adottò una politica spiccatamente autoritaria, emanando una serie di provvedimenti legislativi con i quali venne ristabilita la censura, sciolse la Camera e varò una nuova legge elettorale favorevole all'aristocrazia terriera. Queste disposizioni liberticide scatenarono la furia dei Parigini che, dal 27 al 29 luglio 1830 (le cosiddette «Tre Gloriose Giornate»), si ribellarono contro l'autorità regia e alzarono le barricate nelle strade di Parigi: con il trionfare dell'insurrezione, Carlo X fu costretto a licenziare i suoi ministri, a revocare le ordinanze emesse e ad abdicare e a riparare in Inghilterra.<br><br><b>Dettagli autore</b>: Ferdinand Victor Eugène Delacroix, più semplicemente noto come Eugène Delacroix (Charenton-Saint-Maurice, 26 aprile 1798 – Parigi, 13 agosto 1863), è stato un artista e pittore francese, considerato il principale esponente del movimento romantico del suo paese."

    const closeButton = document.createElement('button')
    closeButton.classList.add('close-button')
    closeButton.innerHTML = 'chiudi approfondimento'

    document.body.appendChild(textContent)
    textContent.appendChild(p)
    textContent.appendChild(closeButton)
    footer.style.marginTop = '1800px'

    closeButton?.addEventListener('click', () => {
        document.body.removeChild(textContent)
        pageContent.classList.remove('hide')
        footer.style.marginTop = '300px'
    })
})

const opera4 = document.getElementById('opera4')

opera4?.addEventListener('click', () => {
    pageContent.classList.add('hide')
    const textContent = document.createElement('div')
    textContent.classList.add('text-content')
    const p = document.createElement('p')
    p.style.fontSize = '21px'
    p.innerHTML = "<b>Dettagli opera</b>: La zattera è popolata dai sopravvissuti al tragico incidente. Un vecchio in primo piano regge sulle ginocchia le spoglie del figlio deceduto, un altro irrompe in lacrime di frustrazione e sgomento. Un ammasso di corpi occupa la parte inferiore del dipinto, in attesa di essere trasportati via dalla corrente. Gli uomini al centro, invece, hanno appena scorto la Argus e uno di loro, l'africano Jean Charles, si erge su una botte vuota, sventolando freneticamente il suo fazzoletto nel tentativo di attirare l'attenzione della nave.<br><br><b>Dettagli autore</b>: Jean-Louis André Théodore Géricault (Rouen, 26 settembre 1791 – Parigi, 26 gennaio 1824) è stato un pittore francese esponente dell'arte romantica. Géricault svolse le sue prime esperienze pittoriche nell’ambiente neoclassico francese che in quegli anni era influenzato dalle figure di David e Ingres. Dopo un periodo di soggiorno a Roma, dove ebbe modo di studiare le opere di Michelangelo e Raffaello, fece ritorno a Parigi, nel 1817, dove conobbe Eugène Delacroix. In quegli anni realizzò il suo quadro più famoso: La zattera della Medusa, che fu esposto nel Salone d’Autunno del 1819."

    const closeButton = document.createElement('button')
    closeButton.classList.add('close-button')
    closeButton.innerHTML = 'chiudi approfondimento'

    document.body.appendChild(textContent)
    textContent.appendChild(p)
    textContent.appendChild(closeButton)
    footer.style.marginTop = '1800px'

    closeButton?.addEventListener('click', () => {
        document.body.removeChild(textContent)
        pageContent.classList.remove('hide')
        footer.style.marginTop = '300px'
    })
})

const opera5 = document.getElementById('opera5')

opera5?.addEventListener('click', () => {
    pageContent.classList.add('hide')
    const textContent = document.createElement('div')
    textContent.classList.add('text-content')
    const p = document.createElement('p')
    p.style.fontSize = '27px'
    p.innerHTML = "<b>Dettagli opera</b>: Antonio Canova ricevette la commissione di un gruppo raffigurante «Amore e Psiche che si abbracciano: momento di azione cavato dalla favola dell'Asino d'oro di Apuleio», per usare le sue stesse parole, nel 1788 dal colonnello John Campbell.<br><br><b>Dettagli autore</b>: Antonio Canova (Possagno, 1º novembre 1757 – Venezia, 13 ottobre 1822) è stato uno scultore e pittore italiano, ritenuto il massimo esponente del Neoclassicismo in scultura e soprannominato per questo «il nuovo Fidia»."

    const closeButton = document.createElement('button')
    closeButton.classList.add('close-button')
    closeButton.innerHTML = 'chiudi approfondimento'

    document.body.appendChild(textContent)
    textContent.appendChild(p)
    textContent.appendChild(closeButton)
    footer.style.marginTop = '1800px'

    closeButton?.addEventListener('click', () => {
        document.body.removeChild(textContent)
        pageContent.classList.remove('hide')
        footer.style.marginTop = '300px'
    })
})

const opera6 = document.getElementById('opera6')

opera6?.addEventListener('click', () => {
    pageContent.classList.add('hide')
    const textContent = document.createElement('div')
    textContent.classList.add('text-content')
    const p = document.createElement('p')
    p.style.fontSize = '27px'
    p.innerHTML = "<b>Dettagli opera</b>: Il 6 giugno 1562 Veronese fu incaricato di decorare la parete di fondo del refettorio benedettino del complesso architettonico progettato da Andrea Palladio sull'Isola di San Giorgio Maggiore. La grande intesa tra Veronese e Palladio fu determinante per il formidabile risultato finale, la cui enorme fama si diffuse presto per tutta Europa.<br><br><b>Dettagli autore</b>: Paolo Caliari, detto il Veronese (Verona, 1528 – Venezia, 19 aprile 1588), è stato un pittore italiano del Rinascimento, cittadino della Repubblica Veneta attivo a Venezia e in altre località del Veneto."

    const closeButton = document.createElement('button')
    closeButton.classList.add('close-button')
    closeButton.innerHTML = 'chiudi approfondimento'

    document.body.appendChild(textContent)
    textContent.appendChild(p)
    textContent.appendChild(closeButton)
    footer.style.marginTop = '1800px'

    closeButton?.addEventListener('click', () => {
        document.body.removeChild(textContent)
        pageContent.classList.remove('hide')
        footer.style.marginTop = '300px'
    })
})


const showTable = document.getElementById('show-table')
const table = document.getElementById('table')
const hideTable = document.getElementById('hide-table')

showTable?.addEventListener('click', () => {
    showTable.classList.add('hide')
    table.classList.remove('hide')
    hideTable.classList.remove('hide')
})

hideTable?.addEventListener('click', () => {
    showTable.classList.remove('hide')
    table.classList.add('hide')
    hideTable.classList.add('hide')
})

const location1 = document.getElementById('location')

location1.addEventListener('click', () => {
    window.open('location.html','_self')
})

const about = document.getElementById('about')

about.addEventListener('click', () => {
    window.open('about.html','_self')
})

const contacts = document.getElementById('contacts')

contacts.addEventListener('click', () => {
    window.open('contacts.html','_self')
})

const info = document.getElementById('info')

info.addEventListener('click', () => {
    window.open('info.html','_self')
})

const showMap = document.getElementById('show-map')
const hideMap = document.getElementById('hide-map')
const map = document.getElementById('map')

showMap?.addEventListener('click', () => {
    showMap.classList.add('hide')
    hideMap.classList.remove('hide')
    map.classList.remove('hide')
})

hideMap?.addEventListener('click', () => {
    showMap.classList.remove('hide')
    hideMap.classList.add('hide')
    map.classList.add('hide')
})