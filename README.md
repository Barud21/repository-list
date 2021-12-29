# **Allegro Spring TECH e-Xperience**

## **Zadanie nr 2 - Frontend Software Engineer**

### **Opis działania aplikacji**

Użytkownik podaje nazwę repozytorium na GitHubie, po kliknięciu przycisku "Search" lub naciśnięciu klawisza Enter zostaje wysłane zapytanie do API GitHuba. Po otrzymaniu odpowiedzi, jeśli podana nazwa użytkownika istnieje, zostaje wyświetlona lista repozytoriów. Jeśli podanej nazwy użytkownika nie ma na GitHubie, pojawi się komunikat, że nie ma takiego użytkownika oraz prośba o podanie innej nazwy.
Lista repozytoriów jest posortowana po popularności (od największej liczby gwiazdek do najmniejszej).
Elementy listy repozytoriów są linkami do nich.

### **Założenia**

Założono, że aplikacja będzie jednostronnicowa, napisana w czystym Javascripcie.
Lista repozytoriów będzie się pojawiała po otrzymaniu poprawnej odpowiedzi z API.

### **Instrukcja instalacji**

Aplikacja jest zahostowana na platformie Heroku, dostępna pod ponizszym linkiem: [repository-list](https://list-repo.herokuapp.com).\
W celu uruchomienia aplikacji lokalnie należy:

1. zainstalować _node.js_,
2. zainstalować _npm_,
3. w terminalu wpisać: `npm install` i zatwierdzić, zostaną zainstalowane odpowiedznie zależności określone w pliku _package.json_,
4. w terminalu wpisać: `npm start`, aplikacja zostanie uruchomiona lokalnie,
5. w przeglądarce otworzyć adres: http://localhost:8080/index.html

### **Komentarze**

Design strony jest do dopracowania, można by dodać funkcjonalność odwrócenia sortowania (od najmniejszej liczby gwiazdek do największej).
