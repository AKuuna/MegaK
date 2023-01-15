//try .. catch...finally
function pow() {
    const num = Number (prompt('Give a number'));

    if(Number.isNaN(num)) {
        throw new Error('Given value is not a number!');
    }

    return num ** 2;
}

try {
    alert(`Your number to the square is ${pow()}`);
    //more lines...
    console.log('OK!');
} catch (error) {
        console.log('Error!');
} finally {
    alert('Program has ended');
}

//async_await

(async() => {
    try {
        const res = await fetch('...');
    } catch (error) {
        console.log('something went wrong', error.message);
    } finally {
        console.log('fetch has finished');
    }

}) ();






//try .. catch
// try {
//     alert(`Your number to the square is ${pow()}`);
//     //more lines...
//     console.log('ok');
// } catch (error) {
//     alert('ups, we were given an error:', Error);
// }

//try .. finally
// try {
//     alert(`Your number to the square is ${pow()}`);
//     //more lines...
//     console.log('ok');
// } finally {
//     alert('Program has ended');
// }

