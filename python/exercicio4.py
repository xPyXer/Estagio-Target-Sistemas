import time

interruptor1 = 1
interruptor2 = 0
interruptor3 = 0

# Primeira iteração: ligar o primeiro interruptor
time.sleep(2)  # Aguardar alguns minutos

# Segunda iteração: desligar o primeiro interruptor e ligar o segundo
interruptor1 = 0
interruptor2 = 1
time.sleep(2)  # Aguardar alguns minutos

# Verificar o estado das lâmpadas
if interruptor1 == 1:
    print("O interruptor 1 controla a lâmpada 1.")
else:
    print("O interruptor 3 controla a lâmpada 1.")

if interruptor2 == 1:
    print("O interruptor 2 controla a lâmpada 2.")
else:
    print("O interruptor 3 controla a lâmpada 2.")

if interruptor3 == 1:
    print("O interruptor 1 controla a lâmpada 3.")
else:
    print("O interruptor 2 controla a lâmpada 3.")
