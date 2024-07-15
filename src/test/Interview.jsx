import { useState } from 'react';

const Interview = () => {
    const [responses, setResponses] = useState({
        experience: '',
        tools: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResponses((prevResponses) => ({
            ...prevResponses,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(responses);
        // Process the responses here
    };

    return (
        <div>
            <h1>React Testing Library Interview</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Describe your experience with React Testing Library:
                        <textarea
                            name="experience"
                            value={responses.experience}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        What other tools or libraries do you use for testing React
                        applications?
                        <textarea
                            name="tools"
                            value={responses.tools}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Interview;
