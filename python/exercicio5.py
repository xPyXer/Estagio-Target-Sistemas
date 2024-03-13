def inverter_string(s):
    inverted = ''
    for i in range(len(s) - 1, -1, -1):
        inverted += s[i]
    return inverted

string = input("Digite uma string: ")
inverted_string = inverter_string(string)
print("String invertida:", inverted_string)
