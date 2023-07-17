import App from "../src/App";
import {render} from "@testing-library/react";

it('should test', () => {
    const {getByText} = render(<App/>)
    expect(getByText('Hello React')).toBeInTheDocument();
})