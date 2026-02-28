// Role-based authorization for "Dietary Services"

function checkAccess(role) {
    const result = { role, allowed: false, features: [], message: "" };

    switch (role) {
        case "Employee":
            result.allowed = true;
            result.features.push("Full access to Dietary Services");
            result.message = "Authorized: Employee — full access to Dietary Services.";
            break;
        case "Enrolled Member":
            result.allowed = true;
            result.features.push("Access to Dietary Services", "One-on-one interaction with a dietician");
            result.message = "Authorized: Enrolled Member — services + dietician interaction.";
            break;
        case "Subscriber":
            result.allowed = true;
            result.features.push("Partial access to facilitate Dietary Services");
            result.message = "Authorized: Subscriber — partial access only.";
            break;
        case "Non-Subscriber":
            result.allowed = false;
            result.message = "Not authorized: please enroll or subscribe to use Dietary Services.";
            break;
        default:
            result.allowed = false;
            result.message = "Unknown role — access denied.";
    }

    return result;
}

function renderResult(res) {
    const lines = [];
    lines.push(`Role: ${res.role}`);
    lines.push(`Authorized: ${res.allowed}`);
    if (res.features.length) {
        lines.push("Features:");
        res.features.forEach(f => lines.push(` - ${f}`));
    }
    lines.push(`Message: ${res.message}`);
    return lines.join('\n');
}

// Wire up UI if running in a browser
if (typeof document !== 'undefined') {
    const roleSelect = document.getElementById('roleSelect');
    const checkBtn = document.getElementById('checkBtn');
    const output = document.getElementById('output');

    if (checkBtn && roleSelect && output) {
        checkBtn.addEventListener('click', () => {
            const role = roleSelect.value;
            const res = checkAccess(role);
            output.textContent = renderResult(res);
            console.log(res);
        });

        // show initial state
        const initial = checkAccess(roleSelect.value);
        output.textContent = renderResult(initial);
    }
}

// Export for programmatic usage (e.g., tests)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { checkAccess, renderResult };
}
