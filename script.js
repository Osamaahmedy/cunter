function addNumber() {
    let sequence = document.getElementById('sequence').value;
    let addNumber = document.getElementById('addNumber').value;
    let messageDiv = document.getElementById('message');

    if (!sequence || !addNumber) {
        showMessage("يرجى إدخال جميع القيم.", "error");
        return;
    }

    try {
        let bigIntSequence = BigInt(sequence);
        let bigIntToAdd = BigInt(addNumber);

        let result = bigIntSequence + bigIntToAdd;

        let output = '';
        for (let i = bigIntSequence + BigInt(1); i <= result; i++) {
            output += i.toString() + '\n';
        }

        document.getElementById('result').textContent = output;
        showMessage("تم إنتاج الأرقام بنجاح!", "success");
    } catch (error) {
        showMessage("هناك خطأ في إدخال الأرقام.", "error");
    }
}

function copyToClipboard() {
    let resultDiv = document.getElementById('result');
    let messageDiv = document.getElementById('message');

    if (resultDiv.textContent.trim() === "") {
        showMessage("لا توجد نتائج لنسخها.", "error");
        return;
    }

    navigator.clipboard.writeText(resultDiv.textContent)
        .then(() => showMessage("تم نسخ النتائج!", "success"))
        .catch(err => showMessage("حدث خطأ أثناء النسخ: " + err, "error"));
}

function showMessage(message, type) {
    let messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}
