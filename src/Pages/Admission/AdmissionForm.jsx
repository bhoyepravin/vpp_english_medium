import React, { useState, useEffect } from "react";

const statesWithDistricts = {
  Maharashtra: ["Nashik", "Pune", "Mumbai", "Nagpur"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
  Karnataka: ["Bengaluru", "Mysuru"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Gwalior"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur"],
  Delhi: ["New Delhi", "North Delhi", "South Delhi"],
};

const admissionClasses = [
  "Nursery",
  "KG",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
];

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const categories = ["General", "OBC", "SC", "ST", "Other"];
const religions = [
  "Hindu",
  "Muslim",
  "Christian",
  "Sikh",
  "Buddhist",
  "Jain",
  "Other",
];

const AdmissionForm = () => {
  const [form, setForm] = useState({
    // Admission Details
    academicYear: "",
    admissionClass: "",
    applicationDate: new Date().toISOString().split("T")[0],

    // Student Details
    studentFirstName: "",
    studentMiddleName: "",
    studentLastName: "",
    dob: "",
    birthPlace: "",
    gender: "",
    bloodGroup: "",
    religion: "",
    caste: "",
    subCaste: "",
    category: "",
    nationality: "Indian",

    // Previous Education
    lastExam: "",
    lastSchool: "",
    lastSchoolAddress: "",
    lastPercentage: "",
    reasonForLeaving: "",

    // Identification
    aadhaar: "",
    passportNo: "",

    // Address Details
    permanentAddress: "",
    state: "",
    district: "",
    pincode: "",
    mobileNo: "",
    email: "",

    // Local Address
    localAddress: "",
    localState: "",
    localDistrict: "",
    localPincode: "",

    // Father Details
    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    fatherQualification: "",
    fatherOccupation: "",
    fatherDesignation: "",
    fatherOrganization: "",
    fatherIncome: "",
    fatherMobile: "",
    fatherOfficePhone: "",
    fatherEmail: "",
    fatherAadhaar: "",
    fatherPAN: "",

    // Mother Details
    motherFirstName: "",
    motherMiddleName: "",
    motherLastName: "",
    motherQualification: "",
    motherOccupation: "",
    motherDesignation: "",
    motherOrganization: "",
    motherIncome: "",
    motherMobile: "",
    motherOfficePhone: "",
    motherEmail: "",
    motherAadhaar: "",
    motherPAN: "",

    // Guardian Details (if different from parents)
    guardianFirstName: "",
    guardianMiddleName: "",
    guardianLastName: "",
    guardianRelation: "",
    guardianOccupation: "",
    guardianMobile: "",
    guardianEmail: "",
    guardianAddress: "",

    // Siblings Details
    siblings: [
      {
        name: "",
        age: "",
        class: "",
        school: "",
      },
    ],

    // Emergency Contact
    emergencyContactName: "",
    emergencyContactRelation: "",
    emergencyContactMobile: "",

    // Medical Information
    medicalHistory: "",
    allergies: "",
    regularMedication: "",
    disability: "",
    doctorName: "",
    doctorContact: "",

    // Transport Details
    needTransport: "No",
    pickupPoint: "",
    dropPoint: "",

    // Hostel Details
    needHostel: "No",
    hostelFacilitiesRequired: "",

    // Academic Interests
    subjectsInterested: "",
    extracurricularActivities: "",
    achievements: "",
    hobbies: "",

    // Documents
    documentsSubmitted: {
      birthCertificate: false,
      aadhaarCard: false,
      previousMarksheet: false,
      transferCertificate: false,
      casteCertificate: false,
      passportPhoto: false,
    },

    // Terms & Conditions
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [isSameAsPermanent, setIsSameAsPermanent] = useState(false);
  const [isFatherAlive, setIsFatherAlive] = useState(true);
  const [isMotherAlive, setIsMotherAlive] = useState(true);
  const [hasGuardian, setHasGuardian] = useState(false);

  // Copy permanent address to local address
  useEffect(() => {
    if (isSameAsPermanent) {
      setForm((prev) => ({
        ...prev,
        localAddress: prev.permanentAddress,
        localState: prev.state,
        localDistrict: prev.district,
        localPincode: prev.pincode,
      }));
    }
  }, [
    isSameAsPermanent,
    form.permanentAddress,
    form.state,
    form.district,
    form.pincode,
  ]);

  const validate = () => {
    const e = {};

    // Required fields validation
    const requiredFields = [
      "academicYear",
      "admissionClass",
      "studentFirstName",
      "studentLastName",
      "dob",
      "gender",
      "permanentAddress",
      "state",
      "district",
      "pincode",
      "fatherFirstName",
      "fatherLastName",
      "fatherMobile",
      "motherFirstName",
      "motherLastName",
    ];

    requiredFields.forEach((field) => {
      if (!form[field]) e[field] = "This field is required";
    });

    // Format validations
    if (!/^[0-9]{12}$/.test(form.aadhaar) && form.aadhaar)
      e.aadhaar = "Aadhaar must be 12 digits";

    if (!/^[0-9]{10}$/.test(form.fatherMobile))
      e.fatherMobile = "Mobile must be 10 digits";

    if (form.motherMobile && !/^[0-9]{10}$/.test(form.motherMobile))
      e.motherMobile = "Mobile must be 10 digits";

    if (form.fatherEmail && !/^\S+@\S+\.\S+$/.test(form.fatherEmail))
      e.fatherEmail = "Invalid email";

    if (form.motherEmail && !/^\S+@\S+\.\S+$/.test(form.motherEmail))
      e.motherEmail = "Invalid email";

    if (form.mobileNo && !/^[0-9]{10}$/.test(form.mobileNo))
      e.mobileNo = "Mobile must be 10 digits";

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Invalid email";

    if (form.pincode && !/^[0-9]{6}$/.test(form.pincode))
      e.pincode = "Pincode must be 6 digits";

    if (form.localPincode && !/^[0-9]{6}$/.test(form.localPincode))
      e.localPincode = "Pincode must be 6 digits";

    if (!form.termsAccepted)
      e.termsAccepted = "You must accept the terms and conditions";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name.startsWith("documentsSubmitted.")) {
      const docField = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        documentsSubmitted: {
          ...prev.documentsSubmitted,
          [docField]: checked,
        },
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleArrayChange = (index, field, value) => {
    const updatedSiblings = [...form.siblings];
    updatedSiblings[index][field] = value;
    setForm({ ...form, siblings: updatedSiblings });
  };

  const addSibling = () => {
    setForm((prev) => ({
      ...prev,
      siblings: [
        ...prev.siblings,
        { name: "", age: "", class: "", school: "" },
      ],
    }));
  };

  const removeSibling = (index) => {
    const updatedSiblings = form.siblings.filter((_, i) => i !== index);
    setForm({ ...form, siblings: updatedSiblings });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // In a real application, you would send data to a server here
      const submissionData = {
        ...form,
        // Add calculated age
        age: calculateAge(form.dob),
        submissionDate: new Date().toISOString(),
      };

      alert("Admission Form Submitted Successfully!");
      console.log("Form Data:", submissionData);

      // You could add API call here:
      // fetch('/api/admissions', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(submissionData)
      // })
    }
  };

  const calculateAge = (dob) => {
    if (!dob) return 0;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const currentYear = new Date().getFullYear();
  const academicYears = Array.from(
    { length: 5 },
    (_, i) => `${currentYear + i}-${currentYear + i + 1}`
  );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-2xl rounded-2xl">
      <div className="bg-blue-600 text-white p-4 rounded-t-2xl mb-6">
        <h1 className="text-3xl font-bold text-center">
          School Admission Form
        </h1>
        <p className="text-center text-blue-100">
          Please fill in all the required fields (*)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Admission Details */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 pb-2 border-b border-blue-200">
            📋 Admission Details
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Academic Year *
              </label>
              <select
                name="academicYear"
                className="input"
                value={form.academicYear}
                onChange={handleChange}
                required
              >
                <option value="">Select Year</option>
                {academicYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {errors.academicYear && (
                <p className="error">{errors.academicYear}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Admission Class *
              </label>
              <select
                name="admissionClass"
                className="input"
                value={form.admissionClass}
                onChange={handleChange}
                required
              >
                <option value="">Select Class</option>
                {admissionClasses.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
              {errors.admissionClass && (
                <p className="error">{errors.admissionClass}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Application Date
              </label>
              <input
                type="date"
                name="applicationDate"
                className="input"
                value={form.applicationDate}
                readOnly
              />
            </div>
          </div>
        </section>

        {/* Student Details */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 pb-2 border-b border-blue-200">
            👨‍🎓 Student Details
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                name="studentFirstName"
                placeholder="First Name"
                className="input"
                value={form.studentFirstName}
                onChange={handleChange}
                required
              />
              {errors.studentFirstName && (
                <p className="error">{errors.studentFirstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Middle Name
              </label>
              <input
                name="studentMiddleName"
                placeholder="Middle Name"
                className="input"
                value={form.studentMiddleName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                name="studentLastName"
                placeholder="Last Name"
                className="input"
                value={form.studentLastName}
                onChange={handleChange}
                required
              />
              {errors.studentLastName && (
                <p className="error">{errors.studentLastName}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth *
              </label>
              <input
                type="date"
                name="dob"
                className="input"
                value={form.dob}
                onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}
                required
              />
              {form.dob && (
                <p className="text-sm text-gray-500 mt-1">
                  Age: {calculateAge(form.dob)} years
                </p>
              )}
              {errors.dob && <p className="error">{errors.dob}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender *
              </label>
              <select
                name="gender"
                className="input"
                value={form.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="error">{errors.gender}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Place of Birth
              </label>
              <input
                name="birthPlace"
                placeholder="Place of Birth"
                className="input"
                value={form.birthPlace}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Blood Group
              </label>
              <select
                name="bloodGroup"
                className="input"
                value={form.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select Blood Group</option>
                {bloodGroups.map((bg) => (
                  <option key={bg} value={bg}>
                    {bg}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Religion
              </label>
              <select
                name="religion"
                className="input"
                value={form.religion}
                onChange={handleChange}
              >
                <option value="">Select Religion</option>
                {religions.map((religion) => (
                  <option key={religion} value={religion}>
                    {religion}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Caste
              </label>
              <input
                name="caste"
                placeholder="Caste"
                className="input"
                value={form.caste}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sub-Caste
              </label>
              <input
                name="subCaste"
                placeholder="Sub-Caste"
                className="input"
                value={form.subCaste}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                name="category"
                className="input"
                value={form.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && <p className="error">{errors.category}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nationality
              </label>
              <select
                name="nationality"
                className="input"
                value={form.nationality}
                onChange={handleChange}
              >
                <option value="Indian">Indian</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Aadhaar Number
              </label>
              <input
                name="aadhaar"
                placeholder="12-digit Aadhaar"
                className="input"
                value={form.aadhaar}
                onChange={handleChange}
                maxLength="12"
              />
              {errors.aadhaar && <p className="error">{errors.aadhaar}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Passport Number
              </label>
              <input
                name="passportNo"
                placeholder="Passport No (if any)"
                className="input"
                value={form.passportNo}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Previous Education */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 pb-2 border-b border-blue-200">
            🏫 Previous Education
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Exam Passed
              </label>
              <input
                name="lastExam"
                placeholder="e.g., 10th Grade"
                className="input"
                value={form.lastExam}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Percentage/Division
              </label>
              <input
                name="lastPercentage"
                placeholder="Percentage"
                className="input"
                value={form.lastPercentage}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last School Attended
            </label>
            <input
              name="lastSchool"
              placeholder="School Name"
              className="input"
              value={form.lastSchool}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              School Address
            </label>
            <textarea
              name="lastSchoolAddress"
              placeholder="Complete address of previous school"
              className="input"
              rows="2"
              value={form.lastSchoolAddress}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason for Leaving Previous School
            </label>
            <textarea
              name="reasonForLeaving"
              placeholder="Reason for leaving"
              className="input"
              rows="2"
              value={form.reasonForLeaving}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Permanent Address */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 pb-2 border-b border-blue-200">
            🏠 Permanent Address
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Permanent Address *
            </label>
            <textarea
              name="permanentAddress"
              placeholder="House No, Street, Area"
              className="input"
              rows="3"
              value={form.permanentAddress}
              onChange={handleChange}
              required
            />
            {errors.permanentAddress && (
              <p className="error">{errors.permanentAddress}</p>
            )}
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State *
              </label>
              <select
                name="state"
                className="input"
                value={form.state}
                onChange={handleChange}
                required
              >
                <option value="">Select State</option>
                {Object.keys(statesWithDistricts).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.state && <p className="error">{errors.state}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                District *
              </label>
              <select
                name="district"
                className="input"
                value={form.district}
                onChange={handleChange}
                required
                disabled={!form.state}
              >
                <option value="">Select District</option>
                {(statesWithDistricts[form.state] || []).map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.district && <p className="error">{errors.district}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pin Code *
              </label>
              <input
                name="pincode"
                placeholder="6-digit Pin Code"
                className="input"
                value={form.pincode}
                onChange={handleChange}
                maxLength="6"
                required
              />
              {errors.pincode && <p className="error">{errors.pincode}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Student Mobile
              </label>
              <input
                name="mobileNo"
                placeholder="Mobile Number"
                className="input"
                value={form.mobileNo}
                onChange={handleChange}
                maxLength="10"
              />
              {errors.mobileNo && <p className="error">{errors.mobileNo}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Student Email
            </label>
            <input
              name="email"
              placeholder="Email Address"
              className="input"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </section>

        {/* Local Address */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-blue-700 pb-2 border-b border-blue-200">
              📍 Local Address (for communication)
            </h2>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="sameAsPermanent"
                checked={isSameAsPermanent}
                onChange={(e) => setIsSameAsPermanent(e.target.checked)}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label
                htmlFor="sameAsPermanent"
                className="ml-2 text-sm text-gray-700"
              >
                Same as Permanent Address
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Local Address
            </label>
            <textarea
              name="localAddress"
              placeholder="Local Address"
              className="input"
              rows="3"
              value={form.localAddress}
              onChange={handleChange}
              disabled={isSameAsPermanent}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <select
                name="localState"
                className="input"
                value={form.localState}
                onChange={handleChange}
                disabled={isSameAsPermanent}
              >
                <option value="">Select State</option>
                {Object.keys(statesWithDistricts).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                District
              </label>
              <select
                name="localDistrict"
                className="input"
                value={form.localDistrict}
                onChange={handleChange}
                disabled={isSameAsPermanent || !form.localState}
              >
                <option value="">Select District</option>
                {(statesWithDistricts[form.localState] || []).map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pin Code
              </label>
              <input
                name="localPincode"
                placeholder="Local Pin Code"
                className="input"
                value={form.localPincode}
                onChange={handleChange}
                maxLength="6"
                disabled={isSameAsPermanent}
              />
              {errors.localPincode && (
                <p className="error">{errors.localPincode}</p>
              )}
            </div>
          </div>
        </section>

        {/* Father Details */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-blue-700 pb-2 border-b border-blue-200">
              👨 Father Details
            </h2>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="fatherAlive"
                checked={isFatherAlive}
                onChange={(e) => setIsFatherAlive(e.target.checked)}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label
                htmlFor="fatherAlive"
                className="ml-2 text-sm text-gray-700"
              >
                Father is Alive
              </label>
            </div>
          </div>

          {isFatherAlive && (
            <>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    name="fatherFirstName"
                    placeholder="First Name"
                    className="input"
                    value={form.fatherFirstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.fatherFirstName && (
                    <p className="error">{errors.fatherFirstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Middle Name
                  </label>
                  <input
                    name="fatherMiddleName"
                    placeholder="Middle Name"
                    className="input"
                    value={form.fatherMiddleName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    name="fatherLastName"
                    placeholder="Last Name"
                    className="input"
                    value={form.fatherLastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.fatherLastName && (
                    <p className="error">{errors.fatherLastName}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Qualification
                  </label>
                  <input
                    name="fatherQualification"
                    placeholder="Highest Qualification"
                    className="input"
                    value={form.fatherQualification}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Occupation
                  </label>
                  <input
                    name="fatherOccupation"
                    placeholder="Occupation"
                    className="input"
                    value={form.fatherOccupation}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Designation
                  </label>
                  <input
                    name="fatherDesignation"
                    placeholder="Designation"
                    className="input"
                    value={form.fatherDesignation}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organization
                  </label>
                  <input
                    name="fatherOrganization"
                    placeholder="Organization"
                    className="input"
                    value={form.fatherOrganization}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Annual Income
                  </label>
                  <input
                    name="fatherIncome"
                    placeholder="Annual Income"
                    className="input"
                    value={form.fatherIncome}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile No *
                  </label>
                  <input
                    name="fatherMobile"
                    placeholder="Mobile Number"
                    className="input"
                    value={form.fatherMobile}
                    onChange={handleChange}
                    maxLength="10"
                    required
                  />
                  {errors.fatherMobile && (
                    <p className="error">{errors.fatherMobile}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Office Phone
                  </label>
                  <input
                    name="fatherOfficePhone"
                    placeholder="Office Phone"
                    className="input"
                    value={form.fatherOfficePhone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email ID
                  </label>
                  <input
                    name="fatherEmail"
                    placeholder="Email Address"
                    className="input"
                    type="email"
                    value={form.fatherEmail}
                    onChange={handleChange}
                  />
                  {errors.fatherEmail && (
                    <p className="error">{errors.fatherEmail}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PAN No
                  </label>
                  <input
                    name="fatherPAN"
                    placeholder="PAN Number"
                    className="input"
                    value={form.fatherPAN}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Father's Aadhaar No
                </label>
                <input
                  name="fatherAadhaar"
                  placeholder="12-digit Aadhaar"
                  className="input"
                  value={form.fatherAadhaar}
                  onChange={handleChange}
                  maxLength="12"
                />
              </div>
            </>
          )}
        </section>

        {/* Mother Details */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-blue-700 pb-2 border-b border-blue-200">
              👩 Mother Details
            </h2>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="motherAlive"
                checked={isMotherAlive}
                onChange={(e) => setIsMotherAlive(e.target.checked)}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label
                htmlFor="motherAlive"
                className="ml-2 text-sm text-gray-700"
              >
                Mother is Alive
              </label>
            </div>
          </div>

          {isMotherAlive && (
            <>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    name="motherFirstName"
                    placeholder="First Name"
                    className="input"
                    value={form.motherFirstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.motherFirstName && (
                    <p className="error">{errors.motherFirstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Middle Name
                  </label>
                  <input
                    name="motherMiddleName"
                    placeholder="Middle Name"
                    className="input"
                    value={form.motherMiddleName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    name="motherLastName"
                    placeholder="Last Name"
                    className="input"
                    value={form.motherLastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.motherLastName && (
                    <p className="error">{errors.motherLastName}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Qualification
                  </label>
                  <input
                    name="motherQualification"
                    placeholder="Highest Qualification"
                    className="input"
                    value={form.motherQualification}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Occupation
                  </label>
                  <input
                    name="motherOccupation"
                    placeholder="Occupation"
                    className="input"
                    value={form.motherOccupation}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Designation
                  </label>
                  <input
                    name="motherDesignation"
                    placeholder="Designation"
                    className="input"
                    value={form.motherDesignation}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organization
                  </label>
                  <input
                    name="motherOrganization"
                    placeholder="Organization"
                    className="input"
                    value={form.motherOrganization}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Annual Income
                  </label>
                  <input
                    name="motherIncome"
                    placeholder="Annual Income"
                    className="input"
                    value={form.motherIncome}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile No
                  </label>
                  <input
                    name="motherMobile"
                    placeholder="Mobile Number"
                    className="input"
                    value={form.motherMobile}
                    onChange={handleChange}
                    maxLength="10"
                  />
                  {errors.motherMobile && (
                    <p className="error">{errors.motherMobile}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Office Phone
                  </label>
                  <input
                    name="motherOfficePhone"
                    placeholder="Office Phone"
                    className="input"
                    value={form.motherOfficePhone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email ID
                  </label>
                  <input
                    name="motherEmail"
                    placeholder="Email Address"
                    className="input"
                    type="email"
                    value={form.motherEmail}
                    onChange={handleChange}
                  />
                  {errors.motherEmail && (
                    <p className="error">{errors.motherEmail}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PAN No
                  </label>
                  <input
                    name="motherPAN"
                    placeholder="PAN Number"
                    className="input"
                    value={form.motherPAN}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mother's Aadhaar No
                </label>
                <input
                  name="motherAadhaar"
                  placeholder="12-digit Aadhaar"
                  className="input"
                  value={form.motherAadhaar}
                  onChange={handleChange}
                  maxLength="12"
                />
              </div>
            </>
          )}
        </section>

        {/* Guardian Details */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-blue-700 pb-2 border-b border-blue-200">
              👤 Guardian Details (if different from parents)
            </h2>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hasGuardian"
                checked={hasGuardian}
                onChange={(e) => setHasGuardian(e.target.checked)}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label
                htmlFor="hasGuardian"
                className="ml-2 text-sm text-gray-700"
              >
                Different Guardian
              </label>
            </div>
          </div>

          {hasGuardian && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  name="guardianFirstName"
                  placeholder="First Name"
                  className="input"
                  value={form.guardianFirstName}
                  onChange={handleChange}
                />
                <input
                  name="guardianMiddleName"
                  placeholder="Middle Name"
                  className="input"
                  value={form.guardianMiddleName}
                  onChange={handleChange}
                />
                <input
                  name="guardianLastName"
                  placeholder="Last Name"
                  className="input"
                  value={form.guardianLastName}
                  onChange={handleChange}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="guardianRelation"
                  placeholder="Relation with Student"
                  className="input"
                  value={form.guardianRelation}
                  onChange={handleChange}
                />
                <input
                  name="guardianOccupation"
                  placeholder="Occupation"
                  className="input"
                  value={form.guardianOccupation}
                  onChange={handleChange}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <input
                  name="guardianMobile"
                  placeholder="Mobile No"
                  className="input"
                  value={form.guardianMobile}
                  onChange={handleChange}
                  maxLength="10"
                />
                <input
                  name="guardianEmail"
                  placeholder="Email ID"
                  className="input"
                  type="email"
                  value={form.guardianEmail}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="guardianAddress"
                placeholder="Guardian Address"
                className="input"
                rows="2"
                value={form.guardianAddress}
                onChange={handleChange}
              />
            </div>
          )}
        </section>

        {/* Siblings */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 pb-2 border-b border-blue-200">
            👨‍👩‍👧‍👦 Siblings Details
          </h2>

          {form.siblings.map((sibling, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded-lg mb-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-700">
                  Sibling {index + 1}
                </h3>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeSibling(index)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <input
                  placeholder="Name"
                  className="input"
                  value={sibling.name}
                  onChange={(e) =>
                    handleArrayChange(index, "name", e.target.value)
                  }
                />
                <input
                  placeholder="Age"
                  className="input"
                  value={sibling.age}
                  onChange={(e) =>
                    handleArrayChange(index, "age", e.target.value)
                  }
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Class/Grade"
                  className="input"
                  value={sibling.class}
                  onChange={(e) =>
                    handleArrayChange(index, "class", e.target.value)
                  }
                />
                <input
                  placeholder="School Name"
                  className="input"
                  value={sibling.school}
                  onChange={(e) =>
                    handleArrayChange(index, "school", e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addSibling}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 text-sm"
          >
            + Add Sibling
          </button>
        </section>

        {/* Emergency Contact */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 pb-2 border-b border-blue-200">
            🚨 Emergency Contact
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Name
              </label>
              <input
                name="emergencyContactName"
                placeholder="Full Name"
                className="input"
                value={form.emergencyContactName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Relation
              </label>
              <input
                name="emergencyContactRelation"
                placeholder="Relation with Student"
                className="input"
                value={form.emergencyContactRelation}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile No
              </label>
              <input
                name="emergencyContactMobile"
                placeholder="Mobile Number"
                className="input"
                value={form.emergencyContactMobile}
                onChange={handleChange}
                maxLength="10"
              />
            </div>
          </div>
        </section>

        {/* Medical Information */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 pb-2 border-b border-blue-200">
            🏥 Medical Information
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Medical History
              </label>
              <textarea
                name="medicalHistory"
                placeholder="Any previous medical conditions or surgeries"
                className="input"
                rows="3"
                value={form.medicalHistory}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Allergies (if any)
              </label>
              <textarea
                name="allergies"
                placeholder="Any allergies to food, medicines, etc."
                className="input"
                rows="2"
                value={form.allergies}
                onChange={handleChange}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Regular Medication
                </label>
                <textarea
                  name="regularMedication"
                  placeholder="Regular medications if any"
                  className="input"
                  rows="2"
                  value={form.regularMedication}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Disability (if any)
                </label>
                <textarea
                  name="disability"
                  placeholder="Any physical or learning disabilities"
                  className="input"
                  rows="2"
                  value={form.disability}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Family Doctor Name
                </label>
                <input
                  name="doctorName"
                  placeholder="Doctor's Name"
                  className="input"
                  value={form.doctorName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Doctor Contact
                </label>
                <input
                  name="doctorContact"
                  placeholder="Doctor's Contact"
                  className="input"
                  value={form.doctorContact}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Transport & Hostel */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 pb-2 border-b border-blue-200">
            🚌 Transport & Hostel Facilities
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Need School Transport?
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="needTransport"
                      value="Yes"
                      checked={form.needTransport === "Yes"}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="needTransport"
                      value="No"
                      checked={form.needTransport === "No"}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>

              {form.needTransport === "Yes" && (
                <div className="space-y-3">
                  <input
                    name="pickupPoint"
                    placeholder="Pickup Point"
                    className="input"
                    value={form.pickupPoint}
                    onChange={handleChange}
                  />
                  <input
                    name="dropPoint"
                    placeholder="Drop Point"
                    className="input"
                    value={form.dropPoint}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Need Hostel Accommodation?
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="needHostel"
                      value="Yes"
                      checked={form.needHostel === "Yes"}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="needHostel"
                      value="No"
                      checked={form.needHostel === "No"}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>

              {form.needHostel === "Yes" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hostel Facilities Required
                  </label>
                  <textarea
                    name="hostelFacilitiesRequired"
                    placeholder="Special requirements for hostel"
                    className="input"
                    rows="3"
                    value={form.hostelFacilitiesRequired}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Academic Interests */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 pb-2 border-b border-blue-200">
            📚 Academic & Extracurricular Interests
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subjects of Special Interest
              </label>
              <textarea
                name="subjectsInterested"
                placeholder="Subjects student is interested in"
                className="input"
                rows="2"
                value={form.subjectsInterested}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Extracurricular Activities Interested
              </label>
              <textarea
                name="extracurricularActivities"
                placeholder="Sports, arts, music, dance, etc."
                className="input"
                rows="2"
                value={form.extracurricularActivities}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hobbies
              </label>
              <textarea
                name="hobbies"
                placeholder="Student's hobbies"
                className="input"
                rows="2"
                value={form.hobbies}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Achievements of Student
              </label>
              <textarea
                name="achievements"
                placeholder="Any achievements, awards, recognitions"
                className="input"
                rows="3"
                value={form.achievements}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Documents Submitted */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 pb-2 border-b border-blue-200">
            📄 Documents Submitted (Tick if attached)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(form.documentsSubmitted).map(([doc, submitted]) => (
              <div key={doc} className="flex items-center">
                <input
                  type="checkbox"
                  id={doc}
                  name={`documentsSubmitted.${doc}`}
                  checked={submitted}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <label
                  htmlFor={doc}
                  className="ml-2 text-sm text-gray-700 capitalize"
                >
                  {doc
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
              </div>
            ))}
          </div>
        </section>

        {/* Terms and Conditions */}
        <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 pb-2 border-b border-blue-200">
            📝 Declaration
          </h2>

          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm text-gray-700">
                I hereby declare that the information provided in this admission
                form is true and correct to the best of my knowledge. I
                understand that any false information may lead to cancellation
                of admission. I agree to abide by the rules and regulations of
                the school and will ensure my child's regular attendance and
                discipline.
              </p>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={form.termsAccepted}
                onChange={handleChange}
                className="h-5 w-5 text-blue-600 rounded"
              />
              <label
                htmlFor="termsAccepted"
                className="ml-2 text-sm text-gray-700"
              >
                I agree to the terms and conditions mentioned above *
              </label>
            </div>
            {errors.termsAccepted && (
              <p className="error">{errors.termsAccepted}</p>
            )}

            <div className="flex items-center">
              <input
                type="checkbox"
                id="photoPermission"
                className="h-5 w-5 text-blue-600 rounded"
              />
              <label
                htmlFor="photoPermission"
                className="ml-2 text-sm text-gray-700"
              >
                I give permission to use my child's photo for school
                publications and website
              </label>
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <div className="text-center pt-6">
          <button
            type="submit"
            className="px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Submit Admission Form
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Note: All fields marked with * are mandatory
          </p>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;

// Don't forget to add the styles to your application
// You can add this in your index.css or App.css:
// ${styles}
