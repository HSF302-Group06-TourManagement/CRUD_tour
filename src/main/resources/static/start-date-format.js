(function () {
    function padTwoDigits(value) {
        return value.length === 1 ? '0' + value : value;
    }

    function formatSlashDate(value) {
        var parts = value.trim().split('/').filter(function (part) {
            return part.length > 0;
        });

        if (parts.length === 0) {
            return '';
        }

        if (parts[0]) {
            parts[0] = padTwoDigits(parts[0]);
        }

        if (parts[1]) {
            parts[1] = padTwoDigits(parts[1]);
        }

        return parts.join('/');
    }

    function autoInsertSlashes(value) {
        var digits = value.replace(/\D/g, '').substring(0, 8);

        if (digits.length < 2) {
            return digits;
        }

        if (digits.length < 4) {
            return digits.substring(0, 2) + '/' + digits.substring(2);
        }

        return digits.substring(0, 2) + '/' + digits.substring(2, 4) + '/' + digits.substring(4);
    }

    document.querySelectorAll('input[data-date-format="dd/MM/yyyy"]').forEach(function (input) {
        input.addEventListener('input', function () {
            // Tu dong chen dau / sau khi nguoi dung nhap du 2 so ngay va 2 so thang.
            input.value = autoInsertSlashes(input.value);
        });

        input.addEventListener('blur', function () {
            input.value = input.value.includes('/') ? formatSlashDate(input.value) : autoInsertSlashes(input.value);
        });
    });
})();
