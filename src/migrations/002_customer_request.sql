DROP TABLE IF EXISTS ibergenil_customer_request;

CREATE TABLE IF NOT EXISTS ibergenil_customer_request (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    data JSONB NOT NULL,
    processed_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);

-- Create indexes
CREATE UNIQUE INDEX IF NOT EXISTS idx_ibergenil_customer_request_data
ON ibergenil_customer_request(data);

-- Create trigger for updated_at
CREATE TRIGGER update_ibergenil_customer_request_updated_at
    BEFORE UPDATE ON ibergenil_customer_request
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();