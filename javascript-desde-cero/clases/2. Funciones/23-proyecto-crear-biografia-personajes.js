function Superheroe(nombre, alias, creador, debut, comics = [], habilidades = [], isHuman)
{
    this.nombre = nombre
    this.alias = alias
    this.creador = creador
    this.debut = debut
    this.comics = comics
    this.habilidades = habilidades
    this.isHuman = isHuman;

    this.isHumanFunction = function(isHumanValue)
    {
        if(isHumanValue==false)
        {
            console.log('No es humano')
        }else
        {
            console.log('Si es humano')
        }
    }
    this.mostrarInfo = function()
    {
        console.log(`INFORMACION DEL SUPERHEROE: \n
        Nombre: ${nombre} \n
        Alias: ${alias} \n
        Creador: ${creador} \n
        Debut: ${debut} \n
        Comics: ${comics !='' ? comics.join(', ') : '---'} \n
        Habilidades: ${habilidades !='' ? habilidades.join(', ') : '---'} \n
        Especie: ${isHuman  ? 'Especie humana' : 'Especie NO humana'} \n`)
        
    }

    this.addComic = function(nombreComic, anioComic)
    {
        console.log(`Comic anadido. \n *Nombre: ${nombreComic}. \n *Publicacion: ${anioComic} \n`)
        const infoComic = nombreComic+' - ' + anioComic;
        this.comics.push(infoComic)
    }

    this.addHabilidades = function(tipoHabilidad)
    {
        console.log(`Habilidad anadida: *${tipoHabilidad} \n`)
        const nuevaHabilidad = tipoHabilidad
        this.habilidades.push(nuevaHabilidad)

    }
}

let spiderman = new Superheroe('Peter Parker', 'Spider-Man','Stan Lee','1932', [], [], true)


spiderman.addComic('Comic N1', '1950')
spiderman.addComic('Comic N2', '2000')

spiderman.addHabilidades('Escalar')
spiderman.addHabilidades('Webonear')

spiderman.mostrarInfo()

let ironMan = new Superheroe('Tony Stark', 'IronMan', 'Unknown','1999',['asdasd'],[],false)
ironMan.mostrarInfo()