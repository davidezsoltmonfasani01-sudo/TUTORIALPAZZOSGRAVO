# 🎉BENVENUTI LOSCHI FIGURI NEL TUTORIAL PER SETTUPARE GIT😎

Seguite i passaggi in ordine e sarete pronti a clonare, committare e pushare come dei programmatori russi pagati a patate e vodka

## 🧩 1️⃣ INSTALLARE GIT SU WINDOWS

### 💻 1.1 Installazione via PowerShell

Apri **PowerShell** come amministratore e incolla:

```powershell
winget install --id Git.Git -e --source winget
```
Verifica che Git sia installato:
```powershell
git --version
```
Se vedi un numero di versione (es. git version 2.45.0), tutto a posto ✅
### 🪟1.2 Installazione tramite interfaccia grafica
#### (se hai gia seguito il punto 1.1 non ti serve seguire questo punto)
1. Vai su 👉 https://git-scm.com/download/win
2. Scarica l’installer per Windows. 
3. Durante l'istallazione:
- Lascia tutte le opzioni di default.
- **Quando compare la voce “Default editor used by Git”**, puoi:
  - lasciare **Blocco Note (Notepad)** ✅ — va benissimo per iniziare;
  - oppure scegliere **Visual Studio Code**, **Notepad++** o **micro** se li preferisci.
- **Alla voce “Git Credential Manager”**, lascialo **attivo** ✅ — servirà per salvare in modo sicuro le credenziali di GitHub. in modo sicuro le credenziali GitHub.
## 🔐 2️⃣ Login su GitHub e creazione del token
### 2.1 Accedi a GitHub
1. Vai su 👉 https://github.com/login
2. Accedi con il tuo account (o creane uno nuovo se non ne hai uno).

### 2.2 🧾 2.2 Crea un Personal Access Token (PAT)

1.Vai su 👉 https://github.com/settings/tokens

- Seleziona Developer settings → Personal access tokens → Tokens (classic)
oppure usa i Fine-grained tokens.

2. Clicca su Generate new token → “Generate new token (classic)”.

3. Spunta almeno questi permessi:

-✅ repo

-✅ workflow

-✅ write:packages (facoltativo)

4. Copia il token e conservalo in un posto sicuro — lo userai per autenticarti con GitHub.

⚠️ I token funzionano come password: non condividerli mai e non caricarli nei repository!

## ⚙️ 3️⃣ Configurazione globale di Git
Apri PowerShell e imposta il tuo nome e la tua email (saranno usati per firmare i commit):
```powershell
git config --global user.name "iltuousername"
git config --global user.email "la_tua_email@example.com"
```
Ora imposta il gestore delle credenziali per Windows:
```powershell
git config --global credential.helper manager
```
🧠 Questo utilizza il Git Credential Manager, incluso con Git per Windows, che memorizza in modo sicuro token e password.
Verifica la configurazione:
```powershell
git config --global --list
```

Dovresti vedere qualcosa come:
```powershell
user.name=Il Tuo Nome
user.email=la_tua_email@example.com
credential.helper=manager
```
## 🌍 4️⃣ Creare e collegare un repository
### 📦 4.1 Creare una repository locale

Apri PowerShell nella cartella del tuo progetto (o creane una nuova):
```powershell
mkdir mio-progetto
cd mio-progetto
git init
```

Aggiungi i file e fai il primo commit:
```powershell
git add .
git commit -m "Primo commit losco"
```
## ☁️ 4.2 Creare una repository su GitHub
### 💡 Metodo 1 — Con interfaccia grafica

1. Vai su 👉 https://github.com/new

2. Inserisci il nome del repository (es. mio-progetto)

3. Scegli Private o Public

4. Clicca su Create repository

5. Poi collega il tuo repository locale a quello remoto:
```powershell        
git remote add origin https://github.com/TUO_USERNAME/mio-progetto.git
git push -u origin main
```
### ⚙️ Metodo 2 — Con la CLI (usando PowerShell + curl)

Salva il token GitHub in una variabile temporanea:
```powershell
$env:GH_TOKEN="IL_TUO_TOKEN_GITHUB"
```

Crea la repository direttamente da terminale:
```powershell
curl -H "Authorization: token $env:GH_TOKEN" `
     -X POST https://api.github.com/user/repos `
     -d '{"name":"mio-progetto", "private":false, "description":"Creato via CLI"}'
```

Se il comando va a buon fine, riceverai una risposta JSON con i dati della nuova repo.

Collega e invia i tuoi file:
```bash
git remote add origin https://github.com/TUO_USERNAME/mio-progetto.git
git push -u origin main
```

#### ✅ 5️⃣ Verifica finale

Controlla che tutto funzioni:
```bash
git status
git remote -v
git config --global --list
```


Se tutto è corretto, la tua repo è pronta e collegata a GitHub 🎉

#### 🧠 EXTRA: Cambiare editor di default (opzionale)

Se vuoi cambiare l’editor predefinito di Git in futuro:
```powershell
git config --global core.editor "code --wait"
```

oppure
```powershell
git config --global core.editor "notepad"
```




#  COMANDI BASE DI GIT 💻

Benvenuti alla seconda parte del tutorial per **loschi figuri** 🦹‍♂️  
Qui impariamo i comandi essenziali per gestire un progetto con Git: aggiungere, salvare, spingere, creare branch, fondere e tornare indietro nel tempo ⏳ per scoparci nostra madre 



## 📦 1️⃣ Aggiungere file all’area di staging

Quando modifichi o crei file nuovi, Git non li “vede” finché non li aggiungi con:

```bash
git add .
```
💡 Il punto . significa “aggiungi tutti i file modificati”.

oppure per un singolo file:

```bash
git add nomefile.ext
```

## 💬 2️⃣ Salvare le modifiche con un commit

Dopo aver aggiunto i file, salvali nella cronologia con un messaggio:
```bash
git commit -m "Messaggio descrittivo del cambiamento"
```
🧠 Scrivi sempre messaggi chiari e brevi: spiegano cosa hai fatto, non come.

## 🚀 3️⃣ Inviare i commit su GitHub (push)

Per caricare i tuoi cambiamenti nel repository remoto su GitHub:
```bash
git push
```
se è il primo push del branch:
```bash
git push -u origin main
```
💡 “origin” è il nome del repository remoto, “main” il branch principale.

## 4️⃣ Creare un nuovo branch

Un branch (ramo) serve per sviluppare nuove funzionalità senza toccare il codice principale.

Crea un nuovo branch:
```bash
git branch nome-del-branch
```

Poi spostati dentro quel branch:
```bash
git switch nome-del-branch
```

oppure (metodo classico):
```bash
git checkout nome-del-branch
```

💡 Puoi creare e passare al branch in un solo comando:
```bash
git switch -c nome-del-branch
```
## 🔀 5️⃣ Fare il merge tra branch

Quando hai finito di lavorare su un branch e vuoi unire i cambiamenti nel principale (main):

Spostati su main:
```bash
git switch main
```

Unisci il branch secondario:
```bash
git merge nome-del-branch
```

⚠️ Se ci sono conflitti, Git ti chiederà di risolverli nei file prima di completare il merge.

## ⏳ 6️⃣ Tornare a un commit precedente

A volte serve “tornare indietro nel tempo”.
Puoi vedere la cronologia dei commit con:
```bash
git log --oneline
```

Esempio di output:
```bash
a12b3c4 Fix bug salvataggio
d56e7f8 Aggiunta funzione media
f90a1b2 Primo commit
```
### 🔙 Torna a un commit specifico (senza perdere la storia)

Puoi creare un nuovo branch partendo da un commit precedente:
```bash
git checkout -b nuovo-ramo a12b3c4
```

Ora puoi proseguire da lì, come se il resto non fosse mai successo.

## 🧭 7️⃣ Resettare la punta del branch a un commit

Se invece vuoi spostare la punta attuale del branch (es. main) a un commit vecchio:
```bash
git reset --hard a12b3c4
```

⚠️ Questo cancella le modifiche successive a quel commit.
Usalo solo se sei sicuro o se hai un backup remoto.

### 🧩 8️⃣ Rendere quel commit la “punta principale” del branch

Dopo aver fatto il reset, puoi forzare l’aggiornamento del repository remoto:
```bash
git push origin main --force
```

⚠️ --force sovrascrive la cronologia remota — da usare con cautela, soprattutto se lavorate in gruppo.

## ✅ Riepilogo rapido
Azione	Comando
Aggiungere tutti i file	
```bash
git add .
```
Salvare con un messaggio	
```bash
git commit -m "messaggio"
```
Inviare a GitHub
```bash
git push
```
Creare un branch
```bash
git branch nome
```
Passare a un branch	
```bash 
git switch nome
```
Unire branch	
```bash
git merge nome
```
Tornare a un commit vecchio
```bash
git checkout -b nuovo nome_commit
```
Spostare la punta del branch	
```bash
git reset --hard nome_commit
```
Forzare aggiornamento remoto
```bash
git push --force
```
## 🎉 Fine!

Ora conosci le mosse base di Git per lavorare anche con le capacità cognitive pari a quelle dei magiatori di eucalipto australiani



