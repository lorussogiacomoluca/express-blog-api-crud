# 📘 Esercizio 41  
## 🚀 Express Blog - API CRUD (parte 1)  
📁 **Repo:** `express-blog-api-crud`

---

## 📋 Esercizio

### 🎯 Milestone 1  
Come prima cosa, creiamo un controller per i nostri **post**, in una cartella `controllers`.  
All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel **router** (al momento restituiscono solo dei messaggi).  
Poi torniamo sul file delle **rotte**. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.  
Testiamo su **Postman** se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.  
✅ Se tutto funziona, passiamo alla prossima milestone.

---

### 🛠️ Milestone 2  
Per iniziare, creiamo una cartella `data` in cui creare un file che contenga ed **esporti l’array di posts** che trovate in allegato.  
Importiamo questo file in cima al controller.  

Ora passiamo ad implementare le logiche delle nostre **CRUD**:
- 📄 `Index` dovrà **restituire la lista dei post in formato JSON**
- 🔍 `Show` dovrà **restituire un singolo post in formato JSON**
- ❌ `Destroy` dovrà **eliminare un singolo post dalla lista**, stampare nel terminale (`console.log`) la lista aggiornata, e **rispondere con uno stato 204** e **nessun contenuto**

📌 **Numero di push minimo: 10**

---

### 🎁 Bonus  
- 🔎 **Implementare un filtro di ricerca** nella `index` che mostri solo i post che hanno un determinato **Tag**  
- ⚠️ In `Show` e `Destroy`, **controllare se il parametro si riferisce ad un post esistente**, in caso contrario, **rispondere con uno stato 404** e un **messaggio d’errore**, sempre in formato JSON.

---

🧑‍💻 **Buon Lavoro e buon divertimento!** 🎉


# 📘 esercizio di oggi: Express Blog - API CRUD (parte 2)

🗂️ **repo**: `express-blog-api-crud`

---

## 🛠️ Esercizio

### 🥇 Milestone 1

Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store.  
✅ Impostiamo il verbo e l’endpoint corretti  
✅ Selezioniamo il tab body e scegliamo il formato raw e JSON  
✅ Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post  

ℹ️ **Nota**: se vogliamo avere delle immagini, inventiamole pure.  
ℹ️ **Nota**: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo.

---

### 🥈 Milestone 2

🔧 Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.  
🖨️ Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un `console.log`

---

### 🥉 Milestone 3

🚀 Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.  
🧪 Testiamolo con postman.

---

### 🏁 Milestone 4

♻️ Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.

---

🔢 **Numero minimo di push**: `6`

---

### 🎁 Bonus

- Quelli del giorno prima, se non già fatti  
- In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato `404` e un messaggio d’errore, sempre in formato JSON.

---

👨‍💻 **Buon Lavoro e buon divertimento**

# 📚 Esercizio 43 - Parte 3

Ciao ragazzi, esercizio di oggi: **Express Blog - Middlewares**  
repo: **express-blog-api-crud** (sempre la stessa)

## 🛠️ Esercizio

Dopo aver completato tutte le operazioni CRUD, completiamo le nostre API inserendo un middleware per la gestione delle rotte non registrate e uno per la gestione degli errori.  

⚡ Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.  

⚡ Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.  

🔢 Numero minimo di push 4
