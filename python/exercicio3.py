# Sequência a)
seq_a = [1, 3, 5, 7]
next_a = seq_a[-1] + 2
print("Resolução A)", next_a)
#Cada número é igual ao anterior + 2, formando os números ímpares


# Sequência b)
seq_b = [2, 4, 8, 16, 32, 64]
next_b = seq_b[-1] * 2
print("Resolução B)", next_b)
#Cada número é igual ao anterior multiplicado por 2


# Sequência c)
seq_c = [0, 1, 4, 9, 16, 25, 36]
next_c = (len(seq_c)) ** 2
print("Resolução C)", next_c)
#Cada número é igual ao anterior acrescido de um número ímpar que segue a sequência 1, 3, 5, 7, 9.


# Sequência d)
seq_d = [4, 16, 36, 64]
next_d = (len(seq_d) + 1) ** 2
print("Resolução D)", next_d)
#Cada número é igual ao quadrado dos números pares.


# Sequência e)
seq_e = [1, 1, 2, 3, 5, 8]
next_e = seq_e[-1] + seq_e[-2]
print("Resolução E)", next_e)
#Cada número é igual à soma do número atual com o número anterior. Assim, o próximo número é igual a 8 + 5 = 13.


# Sequência f)
seq_f = [2, 10, 12, 16, 17, 18, 19, 200]
print("Resolução F)", seq_f)
# Sequência formada através de todos os números que iniciam com a letra d. Assim, o próximo número em ordem crescente que inicia com a letra d é 200
