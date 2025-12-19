import { useState } from "react";
import api from "../utils/api";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function ConsultationFlow({ onClose }) {
  const [step, setStep] = useState("questions"); // questions | loading | form
  const [loading, setLoading] = useState(false);

  const [qualification, setQualification] = useState({
    ageGroup: "",
    hasHearingAid: "",
    issue: "",
    urgency: "",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    notes: "",
  });

  const handleQualification = (e) => {
    setQualification({ ...qualification, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const proceedToForm = () => {
    setStep("loading");
    setTimeout(() => setStep("form"), 1500);
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/leads", {
        ...form,
        qualification,
      });

      alert("✅ Consultation request submitted!");
      onClose();
    } catch {
      alert("❌ Failed to submit");
    }
  };

  const isUrgent = qualification.urgency === "urgent";

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">
      <div className="bg-white max-w-md w-full rounded-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold"
        >
          &times;
        </button>

        {/* STEP 1 – QUESTIONS */}
        {step === "questions" && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">
              Quick Qualification
            </h2>

            <div className="space-y-3">
              <select
                name="ageGroup"
                onChange={handleQualification}
                className="w-full border p-2 rounded"
                required
              >
                <option value="">Age Group</option>
                <option>Under 18</option>
                <option>18–40</option>
                <option>40–60</option>
                <option>60+</option>
              </select>

              <select
                name="hasHearingAid"
                onChange={handleQualification}
                className="w-full border p-2 rounded"
              >
                <option value="">Do you use hearing aids?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <select
                name="issue"
                onChange={handleQualification}
                className="w-full border p-2 rounded"
              >
                <option value="">Main concern</option>
                <option>Hearing loss</option>
                <option>Ringing</option>
                <option>Consultation</option>
                <option>Not sure</option>
              </select>

              <select
                name="urgency"
                onChange={handleQualification}
                className="w-full border p-2 rounded"
              >
                <option value="">Is it urgent?</option>
                <option value="urgent">Yes, urgent</option>
                <option value="normal">No</option>
              </select>

              <button
                onClick={proceedToForm}
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Continue
              </button>
            </div>
          </>
        )}

        {/* STEP 2 – LOADER */}
        {step === "loading" && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p>Checking eligibility...</p>
          </div>
        )}

        {/* STEP 3 – FORM */}
        {step === "form" && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">
              Book Consultation
            </h2>

            {isUrgent && (
              <div className="flex justify-center gap-6 mb-4">
                <a href="tel:+919999999999" className="text-green-600 text-2xl">
                  <FaPhone />
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  className="text-green-500 text-2xl"
                >
                  <FaWhatsapp />
                </a>
              </div>
            )}

            <form onSubmit={submit} className="space-y-3">
              <input
                name="name"
                placeholder="Full Name"
                onChange={handleForm}
                required
                className="w-full border p-2 rounded"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleForm}
                required
                className="w-full border p-2 rounded"
              />
              <input
                name="phone"
                placeholder="Phone"
                onChange={handleForm}
                required
                className="w-full border p-2 rounded"
              />
              <input
                name="preferredDate"
                type="date"
                onChange={handleForm}
                className="w-full border p-2 rounded"
              />
              <textarea
                name="notes"
                placeholder="Notes"
                onChange={handleForm}
                className="w-full border p-2 rounded"
              />

              <button className="w-full bg-orange-500 text-white py-2 rounded">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
