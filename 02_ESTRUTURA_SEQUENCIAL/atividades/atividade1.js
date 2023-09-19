let titulo, horas, filme, minutos
titulo = prompt("Digite o titulo do vídeo")
minutos = prompt("Digite os minutos do video:")

horas = Math.floor(minutos) / 60
horas =  parseInt(horas)
minutos = minutos % 60

document.write(`Seu Titulo é ${titulo}, sua duração em horas é:  ${horas} horas e em minutos é ${minutos} minutos`)