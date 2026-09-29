from ai_core.gemini_generator import generate_document
from main import create_pdf


result = generate_document(
    "Rental Agreement",
    "Landlord and Tenant",
    "Monthly rent is Rs. 10,000. Agreement period is 1 year.",
    "23-09-2026"
)

filename = create_pdf(result)

print("PDF created successfully!")
print("File:", filename)