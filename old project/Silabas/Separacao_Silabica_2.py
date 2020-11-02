def programa_separa_silaba():
    arquivo = open("silabas.txt", 'r')
    lista = []
    LISTA_GERAL = []
    for i in arquivo:
        if i[0] != "#":
            i = i.split()
            lista.append(i)
            
    for i in range(len(lista)-1):
        if i == 0:
            C = lista[i]
        else:
            V = lista[i]
    for i in C:
        LISTA_GERAL.append(i)
        
    for i in V:
        LISTA_GERAL.append(i)
        
    TRI = encontro_2(C)
    for  i in TRI:
        LISTA_GERAL.append(i)
        
    SI = silaba(C, V)
    for i in SI:
        LISTA_GERAL.append(i)
    # ------------------------ #
    SI1 = silabas_1(SI, V, C)
    for i in SI1:
        LISTA_GERAL.append(i)
        
    SI12 = quadrissilabo(SI1)
    for i in SI12:
        LISTA_GERAL.append(i)
    # ------------------------ #
    SI2 = trissilabo(V, TRI)
    for i in SI2:
        LISTA_GERAL.append(i)

    SI3 = silabas_4(C, V, TRI)
    for i in SI3:
        LISTA_GERAL.append(i)

    SI4 = fim_verbo(V)
    for i in SI4:
        LISTA_GERAL.append(i)
    
    SI5, SI6 = encontro_vogal(V)
    for i in SI5:
        LISTA_GERAL.append(i)
    for i in SI6:
        LISTA_GERAL.append(i)

    return(LISTA_GERAL)

def silabas_1(SI, V, C):
    """
    FORMA SILABAS C+V+V e C+V+C
    Exemplo: van e cao"""
    L = []
    CC = ['n','s','r','m','l']
    E = ['a','e']
    for i in SI:
        for j in CC:
            L.append(i+j)
    for i in SI:
        if i[1] != 'u':
            L.append(i+'u')
        if i[1] in E:
            L.append(i+'o')

    return L

def quadrissilabo(SI1):
    """
    FORMA SILABAS C+V+C+C
    Exemplo: mons
    """
    L=[]
    for i in SI1:
        if i[2] == 'n':
            L.append(i+'s')

    return L

def encontro_2(C):
    """

    FORMA COMEÇO DE SILABAS C+C
    Exemplo: ch e tr

    """
    L = []
    lista_comparacao = ['h','j','k','l','m','n','q','r','s','w','x','y','z']
    for i in range(len(C)):
        if C[i] == 'c' or C[i] == 'l' or C[i] == 'n':
            L.append(C[i]+'h')
        elif C[i] not in lista_comparacao:
            L.append(C[i]+'r')
    for i in range(len(C)):
        if C[i] not in lista_comparacao:
            L.append(C[i]+'l')
        
    return L

def fim_verbo(V):
    """

    FORMA SILABA V+C
    Exemplo: ar e  el
    
    """
    L = []
    lista_comp = ['r','s','m','n','l','z','x']
    for i in range(len(V)):
        for j in range(len(lista_comp)):
            L.append(V[i]+lista_comp[j])

    return L

def encontro_vogal(V):
    """

    FORMA SILABAS C+V+V
    Exemplo: gui e qua

    """
    L1 = []
    L2 = []
    lista_comp = ['q','g']
    lista_comp2 = ['m','n','r','s','l']
    for i in range(len(V)):
        for j in range(len(lista_comp)):
            if V[i] != 'u':
                L1.append(lista_comp[j]+'u'+V[i])
    for i in range(len(L1)):
        for j in range(len(lista_comp2)):
            if L1[i] != "gui":
                L2.append(L1[i]+lista_comp2[j])
    
    return L1, L2
                  
def trissilabo(V, TRI):
    """


    FORMA SILABAS C+C+V
    Exemplo: tri, cha e lho

    """
    L = []
    for i in range(len(TRI)):
        for j in range(len(V)):
            L.append(TRI[i]+V[j])

    return L
    
def silaba(C, V):
    """

    FORMA SILABAS C+V
    Exemplo: ba, ce, ge

    """
    L = []
    for i in range(len(C)):
        for j in range(len(V)):
            L.append(C[i]+V[j])

    return L

def silabas_4(C, V, TRI):
    """

    FORMA SILABAS C+C+V+C
    Exemplo: bral, chas, trim

    """
    L = []
    lista_comp = ['s','m','r', 'l']
    for i in range(len(TRI)):
        for j in range(len(V)):
            for w in range(len(lista_comp)):
                L.append(TRI[i]+V[j]+lista_comp[w])

    return L


