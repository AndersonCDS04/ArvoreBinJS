classe  BinaryTree  {
    // faz a inicialização da raiz da arvore
    constructor ( )  {
        isso . root  = null
    }
    //mosta o menor valor que tem na arvore
    min ( )  {
        deixe  atual  =  isto . raiz
        if  ( atual  == nulo )
            retornar nulo
        while  ( atual . esquerda ! = nula )
    
            atual  =  atual . esquerda
         corrente de retorno . conteúdo

    }

    max ( )  {
        deixe  atual  =  isto . raiz
        if  ( atual  == nulo )
            retornar nulo
        while  ( atual . direito ! = nulo )
            atual  =  atual . certo
         corrente de retorno . conteúdo
     //mostra o maior varlor que tem na arvore
    }

    insert ( elemento )  {
        isso . raiz  =  isso . insertNode ( este . raiz ,  elemento )
    //inseri um elemento na arvore
    }

    insertNode ( rootNode ,  elemento )  {
        if  ( rootNode  == null )
            retornar  novo  nó ( elemento )
        if  ( elemento  >  rootNode . content )
            rootNode . right  =  this . insertNode ( rootNode . right ,  elemento )
        outro
            rootNode . esquerda  =  isso . insertNode ( rootNode . left ,  elemento )
        retorno  rootNode
    }

    inOrderTraverse ( retorno de chamada )  {
        isso . inOrderVisitor ( este . root ,  retorno de chamada )
    //faz a execução de uma função que retorna a chamada para cada nó
    }

    inOrderVisitor ( nó ,  retorno de chamada )  {
        if  ( nó  == nulo )
            Retorna
        isso . inOrderVisitor ( nó . esquerda ,  retorno de chamada )
        retorno de chamada ( nó . conteúdo )
        isso . inOrderVisitor ( nó . direita ,  retorno de chamada )
    }

    preOrderTraverse ( retorno de chamada )  {
        isso . preOrderVisitor ( esta . raiz ,  chamada de retorno )
    //faz a execução de uma função que retorna a chamada para cada nó
    }

    preOrderVisitor ( nó ,  retorno de chamada )  {
        if  ( nó  == nulo )
            Retorna
        retorno de chamada ( nó . conteúdo )
        isso . preOrderVisitor ( nó . esquerda ,  retorno de chamada )
        isso . preOrderVisitor ( nó . direita ,  retorno de chamada )
    }

    postOrderTraverse ( retorno de chamada )  {
        isso . postOrderVisitor ( esta . raiz ,  chamada de retorno )
    //faz a execução de uma função que retorna a chamada para cada nó
    }

    postOrderVisitor ( nó ,  retorno de chamada )  {
        if  ( nó  == nulo )
            Retorna
        isso . postOrderVisitor ( nó . esquerda ,  retorno de chamada )
        isso . postOrderVisitor ( nó . direita ,  retorno de chamada )
        retorno de chamada ( nó . conteúdo )
    }

    // so retorna true se o valor já existe na arvore 
    pesquisa ( valor )  {
        devolva  isso . searchVisitor ( este . raiz ,  valor )
    }

    searchVisitor ( nó ,  elemento )  {
        if  ( nó  == nulo )
            retornar  falso
        if  ( nó . conteúdo  ==  elemento )
            return  true ;
        if  ( elemento  >  nó . conteúdo )
            devolva  isso . searchVisitor ( nó . direita ,  elemento )
        outro
            devolva  isso . searchVisitor ( nó . esquerda ,  elemento )
    }
    remove ( valor )  {
        isso . raiz  =  isso . removeVisitor ( este . raiz ,  valor )
    //É usado pra remover um elemento existente na recuperação de um outro elemento 
    }

    removeVisitor ( nó ,  valor )  {
        if  ( nó . conteúdo  ==  valor )  {
            if  ( nó . esquerda  ==  nó . direita )  {
                retornar nulo
            }  else  if  ( nó . right  == null )  {
                 nó de retorno . esquerda
            }  else  if  ( nó . left  == null )  {
                 nó de retorno . certo
            }  mais  {
                const  newRoot  =  nó . certo
                deixe  atual  =  nó . certo ;
                while  ( atual . esquerda ! = nula )
                    atual  =  atual . esquerda
                atual . esquerda  =  nó . esquerda
                return  newRoot ;
            }
        }  else  if  ( valor  <  nó . conteúdo )  {
            nó . esquerda  =  isso . removeVisitor ( nó . esquerda ,  valor )
        }  mais  {
            nó . right  =  this . removeVisitor ( nó . direita ,  valor )
        }
         nó de retorno ;
    }
    height ( )  {
        devolva  isso . heightVisitor ( este . root )
    //faz a exibisão da altura da arvore
    }

    heightVisitor ( nó )  {
        if  ( ! node )
            retorno  - 1
        deixe  leftHeight  =  isso . heightVisitor ( nó . esquerda ) ,
            rightHeight  =  isso . heightVisitor ( nó . direita )
        retornar  Math . max ( leftHeight ,  rightHeight )  +  1
    }

    size ( )  {
        devolva  isso . sizeVisitor ( este . root )
    //informa quantos nós tem na arvore
    }

    sizeVisitor ( nó )  {
        if  ( ! node )
            retornar  0
        devolva  isso . sizeVisitor ( nó . esquerda )  +  isso . sizeVisitor ( nó . direita )  +  1
    }
}
