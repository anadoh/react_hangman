export function showNotification(setter) {
    setter(true);
    setTimeout(()=> {
        setter(false);
    }, 2000);
    ;
}

export function checkWin (correct, wrong, word) {
    let status = 'win';

    word.split('').forEach(letter => {
        if(!correct.includes(letter)){
            status = '';
        }
    });
    if(wrong.length === 6){ 
        status='lose'; 
    }
    return status;
}   

export async function getWordsFromApi() {
    const response = await fetch(
      "https://random-word-api.herokuapp.com/word?number=10"
    );
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response);
    }
  }