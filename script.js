function generateNumbers() {
    const startNumber = parseInt(document.getElementById('startNumber').value);
    const increment = parseInt(document.getElementById('increment').value);
    let output = '';
    const message = document.getElementById('message');

    if (isNaN(startNumber) || isNaN(increment)) {
        message.style.color = 'red';
        message.textContent = 'يرجى إدخال أرقام صحيحة.';
        return;
    }

    message.textContent = '';
    for (let i = 0; i < 10; i++) {
        output += (startNumber + i * increment) + '\n';
    }

    document.getElementById('output').value = output;
    message.style.color = '#28a745';
    message.textContent = 'تم توليد الأرقام بنجاح!';
}

function copyToClipboard() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
    const message = document.getElementById('message');
    message.style.color = '#28a745';
    message.textContent = 'تم نسخ الأرقام إلى الحافظة!';
}

function saveToLocalStorage() {
    const output = document.getElementById('output').value;
    localStorage.setItem('generatedNumbers', output);
    const message = document.getElementById('message');
    message.style.color = '#28a745';
    message.textContent = 'تم حفظ الأرقام في التخزين المحلي!';
}

function loadFromLocalStorage() {
    const output = localStorage.getItem('generatedNumbers');
    if (output) {
        document.getElementById('output').value = output;
        const message = document.getElementById('message');
        message.style.color = '#28a745';
        message.textContent = 'تم تحميل الأرقام من التخزين المحلي!';
    } else {
        const message = document.getElementById('message');
        message.style.color = 'red';
        message.textContent = 'لا توجد بيانات محفوظة في التخزين المحلي!';
    }
}